'use client';
import { Survey } from 'survey-react-ui';
import { Model, SurveyModel } from 'survey-core';
import 'survey-core/survey-core.css';
import { data } from './data';

const FreeFormRenderer: React.FC = () => {
  // Test with a sample JSON (created from online demo)
  const surveyJson = {
    pages: [
      {
        name: 'page1',
        elements: [
          {
            type: 'text',
            name: 'question1'
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
  const surveyData = data;
  const survey: SurveyModel = new Model(surveyJson);
  survey.data = surveyData;
  survey.readOnly = true;

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <Survey model={survey} />
    </section>
  );
};

export default FreeFormRenderer;
