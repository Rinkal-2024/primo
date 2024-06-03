import{ useEffect } from 'react';
import './App.css';
import externalJs from './hook/externalJs';

function App() {
  const loaded = externalJs('https://ps.visarity.com/demos/preview/handler.js');

  useEffect(() => {
    if (loaded) {
      // Ensure the external script is loaded and PrimoPreviewHandler is available on the window object
      if (window.PrimoPreviewHandler) {
        
        console.log(PrimoPreviewHandler);
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
