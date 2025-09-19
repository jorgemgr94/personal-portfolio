'use client';
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import type { ICreatorOptions } from "survey-creator-core";
import { useEffect, useState } from 'react';

import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.css";


const TestSurveyCreator: React.FC = () => {
  const [creator, setCreator] = useState<SurveyCreator | null>(null);

  useEffect(() => {
    const creatorOptions: ICreatorOptions = {
      showLogicTab: true,
      showTranslationTab: false,
      // DON'T set haveCommercialLicense: true for testing
      haveCommercialLicense: false,
      // questionTypes: ["radiogroup"], // Solo preguntas tipo radio
    };

    const surveyJson = {
      title: "Examen de prueba",
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "radiogroup",
              name: "pregunta1",
              title: "¿Cuál es la capital de Francia?",
              choices: ["Madrid", "París", "Berlín"],
              correctAnswer: "París"
            }
          ]
        }
      ]
    };

    const surveyCreator = new SurveyCreator(creatorOptions);
    surveyCreator.text = JSON.stringify(surveyJson);

    // Test save function
    surveyCreator.saveSurveyFunc = (saveNo: number, callback: (saveNo: number, success: boolean) => void) => {
      const formJson: string = surveyCreator.text;
      console.log('Form JSON:', formJson);

      // Show the generated JSON
      const jsonDisplay = document.getElementById('json-output');
      if (jsonDisplay) {
        try {
          jsonDisplay.textContent = JSON.stringify(JSON.parse(formJson), null, 2);
        } catch (error) {
          jsonDisplay.textContent = 'Invalid JSON generated';
        }
      }

      callback(saveNo, true);
    };

    setCreator(surveyCreator);
  }, []);

  if (!creator) return <div>Loading...</div>;

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <SurveyCreatorComponent creator={creator} />
    </section>
  );
};

export default TestSurveyCreator;
