import{ useEffect } from 'react';
import './App.css';
import externalJs from './hook/externalJs';

function App() {
  const loaded = externalJs('https://ps.visarity.com/demos/preview/handler.js');

  useEffect(() => {
    if (loaded) {
      // Ensure the external script is loaded and PrimoPreviewHandler is available on the window object
      if (window.PrimoPreviewHandler) {
        const params = {
          creativeID: 'v3ad-77b1-b6ac-81c6-029d3' // example creative ID
        };
        
        window.PrimoPreviewHandler.getHandler(params).then(handler => {
          console.log('Handler obtained:', handler);

          // Example usage of the handler
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

        }).catch(error => {
          console.error('Error getting handler:', error);
        });
      } else {
        console.error('PrimoPreviewHandler is not defined');
      }
    }
  }, [loaded]);

  return (
    <div className="App">
      {loaded ? 'Script Loaded' : 'Script is Not Loaded'}
    </div>
  );
}

export default App;
