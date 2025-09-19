import sdk from '@stackblitz/sdk';
import { useEffect, useState } from 'react';

export default function Demo() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // delay this 5 seconds to test
    sdk
      .embedProjectId('embed', 'jorgemgr-surveyjs', {
        openFile: 'src/App.tsx',
        view: 'preview',
        height: '100%'
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);



  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        margin: 0
      }}
    >
      <h1>Demo</h1>
      <div
        id="embed"
        style={{
          width: '100%',
          flex: 1,
          minHeight: 0,
          position: 'relative'
        }}
      >
        {isLoading && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f5f5f5'
            }}
          >
            Loading editor...
          </div>
        )}
      </div>
    </div>
  );
}
