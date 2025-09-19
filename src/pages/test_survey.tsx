'use client';
import { Survey } from 'survey-react-ui';
import { Model, SurveyModel } from 'survey-core';
import 'survey-core/survey-core.css';

import {
  LayeredDarkPanelless,
  LayeredLightPanelless,
  LayeredLight,
  LayeredDark,
  BorderlessLightPanelless,
  BorderlessLight,
  BorderlessDarkPanelless,
  BorderlessDark
} from 'survey-core/themes';
import { useState } from 'react';

const FreeFormRenderer: React.FC = () => {
  // Create a themes object for easier mapping
  const themes = {
    LayeredDarkPanelless,
    BorderlessDark,
    BorderlessDarkPanelless,
    BorderlessLight,
    BorderlessLightPanelless,
    LayeredLightPanelless,
    LayeredLight,
    LayeredDark
  };

  // Add state to track the current theme
  const [currentTheme, setCurrentTheme] = useState('LayeredDarkPanelless');

  // Test with a sample JSON (created from online demo)
  const sampleFormJson = {
    pages: [
      {
        name: 'page1',
        elements: [
          {
            type: 'text',
            name: 'question1'
          },
          {
            type: 'radiogroup',
            name: 'pregunta1',
            title: '¿Cuál es la capital de Francia?',
            choices: ['Madrid', 'París', 'Berlín'],
            correctAnswer: 'París'
          }
        ]
      },
      {
        name: 'page2',
        elements: [
          {
            type: 'image',
            name: 'question2',
            imageFit: 'cover',
            imageHeight: 'auto',
            imageWidth: '100%'
          },
          {
            type: 'signaturepad',
            name: 'question3'
          },
          {
            type: 'file',
            name: 'question1'
          }
        ]
      }
    ],
    headerView: 'advanced'
  };

  const survey: SurveyModel = new Model(sampleFormJson);
  // Apply the current theme
  survey.applyTheme(themes[currentTheme as keyof typeof themes]);
  survey.showCompletedPage = false;

  survey.onComplete.add((sender: SurveyModel) => {

    console.log('correct answer count', sender.getCorrectedAnswerCount());

    // How can I know the size of the data in bytes?
    const dataSize = JSON.stringify(sender.data).length;
    console.log('data size', dataSize);

    console.log('data', JSON.stringify(sender.data));

    alert('Form completed');
  });

  // Handle theme change
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentTheme(e.target.value);
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        <select
          value={currentTheme}
          onChange={handleThemeChange}
          className="p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        >
          {Object.keys(themes).map((themeName) => (
            <option key={themeName} value={themeName}>
              {themeName}
            </option>
          ))}
        </select>
      </div>
      <Survey model={survey} />
    </section>
  );
};

export default FreeFormRenderer;
