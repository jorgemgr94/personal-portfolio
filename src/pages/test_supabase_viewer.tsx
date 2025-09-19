'use client';
import React, { useState } from 'react';
import { Survey, Model } from 'survey-react-ui';
import { SurveyModel } from 'survey-core';
import 'survey-core/survey-core.css';
import toast, { Toaster } from 'react-hot-toast'; // Add this import
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { uploadToSupabase } from '@/components/CustomUploader';
import dynamic from 'next/dynamic';

const ClientOnlySurvey = dynamic(
  () => import('survey-react-ui').then((mod) => mod.Survey),
  {
    ssr: false,
    loading: () => <div>Loading survey...</div>
  }
);

// Encuesta
const formConfig = {
  title: 'Formulario de Adopción',
  elements: [
    {
      type: 'text',
      name: 'nombre',
      title: '¿Cuál es tu nombre?',
      isRequired: true
    },
    {
      type: 'file',
      name: 'identificacion2',
      maxSize: 10485760, // 10MB in bytes
      acceptedTypes: '.jpg,.jpeg,.png,.pdf',
      storeDataAsText: false,
      waitForUpload: true,
      allowMultiple: true,
      isRequired: true
    },
  ]
};

function App() {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const defaultSurveyData = {
    identificacion2: [
      {
        name: 'DECLARACIÓN ( MAYO 2025 ) (1).pdf',
        type: 'application/pdf',
        content:
          'https://npgzfxnoycbpgpegogbl.supabase.co/storage/v1/object/public/surveys/public/2gq9pkq68jw-DECLARACIO_N___MAYO_2025____1_.pdf'
      }
    ],
    nombre: 'Pedro'
  };
  const [surveyData, setSurveyData] = useLocalStorage('surveyData', defaultSurveyData);

  const survey: SurveyModel = new Model(formConfig);
  survey.data = surveyData;
  survey.readOnly = isReadOnly;

  // remove the complete button
//  survey.showPreviewBeforeComplete = 'showAlways';
  survey.showCompletedPage = false;
  survey.completeText = 'Enviar';
  // survey.showNavigationButtons = false;  // This removes all navigation buttons

  // Handle file downloads properly
  // survey.onDownloadFile.add((survey, options) => {
  //   if (options.content) {
  //     // Create a hidden anchor element
  //     const link = document.createElement('a');
  //     link.href = options.content;
  //     link.target = '_blank';
  //     link.rel = 'noopener noreferrer';
  //     link.download = options.name || 'download';

  //     // Append to body, click, and remove
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   }
  //   return false; // Prevent default behavior
  // });

  survey.onComplete.add((sender) => {
    console.log(JSON.stringify(sender.data));
  });

  survey.onUploadFiles.add(async (_, options) => {

    try {
      const file = options.files[0];
      const fileUrl = await uploadToSupabase(file);
      // const signedUrl = await getSignedUrl(fileUrl);

      options.callback(
        options.files.map((file) => {
          return {
            file: file,
            content: fileUrl,
          };
        })
    );
    } catch (error) {
      console.error('Error while uploading file: ', error);
      options.callback([], [ 'An error occurred during file upload.' ]);
    }
  });

  async function deleteFile(fileURL: string) {
    try {
      const name = fileURL.split('=')[1];
      const apiUrl = `https://api.surveyjs.io/private/Surveys/deleteTempFile?name=${name}`;
      const response = await fetch(apiUrl, { method: 'DELETE' });

      if (response.status === 200) {
        console.log(`File ${name} was deleted successfully`);
        return 'success';
      } else {
        console.error(`Failed to delete file: ${name}`);
        return 'error';
      }
    } catch (error) {
      console.error('Error while deleting file: ', error);
      return 'error';
    }
  }

  // survey.onClearFiles.add(async (_, options) => {
  //   if (!options.value || options.value.length === 0) {
  //     return options.callback('success');
  //   }

  //   const filesToDelete = options.fileName
  //     ? options.value.filter((item: any) => item.name === options.fileName)
  //     : options.value;

  //   if (filesToDelete.length === 0) {
  //     console.error(`File with name ${options.fileName} is not found`);
  //     return options.callback('error');
  //   }

  //   const results = await Promise.all(
  //     filesToDelete.map((file: any) => deleteFile(file.content))
  //   );

  //   if (results.every((res) => res === 'success')) {
  //     options.callback('success');
  //   } else {
  //     options.callback('error');
  //   }
  // });

  survey.onValueChanged.add((sender, options) => {
    const updatedData = sender.data;

    setSurveyData(updatedData);
    toast.success(`Cambios guardados correctamente`);
  });

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setIsReadOnly(!isReadOnly)}
          style={{
            padding: '8px 16px',
            backgroundColor: isReadOnly ? '#dc3545' : '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {isReadOnly ? 'Enable Editing' : 'Disable Editing'}
        </button>
      </div>
      <ClientOnlySurvey model={survey} />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
