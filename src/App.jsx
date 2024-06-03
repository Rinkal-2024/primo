import { useEffect } from 'react';
import './App.css';
import externalJs from './hook/externalJs';

function App() {
  const loaded = externalJs('https://ps.visarity.com/demos/preview/handler.js');

  useEffect(() => {
    if (loaded) {
      if (window.PrimoPreviewHandler) {
        const params = 
        ['v3ad-d731-872a-a237-43f3f',
          'v3ad-77b1-b6ac-81c6-029d3',
          'v3ad-afce-910f-ceba-be8f6',
          'v3ad-d731-872a-a237-43f3f',
          'v3ad-e78c-9ee8-70d0-7e20d',
          'v3ad-6aec-9741-af36-d0883',
          'v3ad-4817-96f6-06d2-2710c',
          'v3ad-2171-8293-5adb-35160',
          'v3ad-abc7-a885-f790-5d1f4',
          'v3ad-3441-a59d-61ac-b28a8',
          'v3ad-9f69-9e42-4432-c7466',
          'v3ad-511a-b39f-f5bc-39b52',
          'v3ad-9341-87d1-1799-7f495',
          'v3ad-9d8c-a7a0-a5b3-f55e2'];

        window.PrimoPreviewHandler.getHandler(params[8]).then(handler => {
          console.log(handler);

          handler.setupPlayer(
            document.getElementById('placementDiv'),
            document.getElementById('mainDiv'),
            document.getElementById('trackDiv'),
            'PHONE',
            {}
          ).then(player => {
            console.log('Player setup complete:', player);
          }).catch(error => {
            console.error('Error setting up player:', error);
          });
        });
      }
      console.log(PrimoPreviewHandler);
    }
  
  }, [loaded]);

  return (
    <div className="App">
      {loaded ? 'Script Loaded' : 'Script is Not Loaded'}
    </div>
  );
}

export default App;
