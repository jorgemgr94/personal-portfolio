'use client';
import React from 'react';
import { Survey, Model } from 'survey-react-ui';
import 'survey-core/survey-core.css';
import { getSignedUrl, uploadToSupabase } from '@/components/CustomUploader';


// Constants for file upload constraints
const FILE_UPLOAD_CONSTRAINTS = {
  maxSize: 10485760, // 10MB in bytes
  acceptedTypes: '.jpg,.jpeg,.png,.pdf',
  storeDataAsText: false,
  waitForUpload: true
};

// Survey definition
const surveyJson = {
  title: 'Formulario de Adopción',
  elements: [
    {
      type: 'file',
      name: 'identificacion2'
      // maxSize: 10485760, // 10MB in bytes
      // acceptedTypes: '.jpg,.jpeg,.png,.pdf',
      // storeDataAsText: false,
      // waitForUpload: true,
      // allowMultiple: true
    },
    {
      type: 'text',
      name: 'nombre',
      title: '¿Cuál es tu nombre?'
    }
  ]
};

function App() {
  const processedSurveyJson = {
    ...surveyJson,
    elements: surveyJson.elements.map(element => {
      if (element.type === 'file') {
        return {
          ...element,
          ...FILE_UPLOAD_CONSTRAINTS
        };
      }
      return element;
    })
  };

  const survey = new Model(processedSurveyJson);



  return <Survey model={survey} />;
}

export default App;
