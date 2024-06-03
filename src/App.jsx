import { useEffect } from "react";
import "./App.css";

function App() {
  const loaded = true;

  const externalJS = (callback) => {
    const root = document.getElementById("root");
    const script = document.createElement("script");
    script.setAttribute( "src", "https://ps.visarity.com/demos/preview/handler.js");
    script.onreadystatechange = callback;
    script.onload = callback;
    root.append(script);
  };
  useEffect(() => {
    externalJS(function () {
      console.log("window", window);
      if (window.PrimoPreviewHandler) {
        const params = [
          "v3ad-d731-872a-a237-43f3f",
          "v3ad-77b1-b6ac-81c6-029d3",
          "v3ad-afce-910f-ceba-be8f6",
          "v3ad-d731-872a-a237-43f3f",
          "v3ad-e78c-9ee8-70d0-7e20d",
          "v3ad-6aec-9741-af36-d0883",
          "v3ad-4817-96f6-06d2-2710c",
          "v3ad-2171-8293-5adb-35160",
          "v3ad-abc7-a885-f790-5d1f4",
          "v3ad-3441-a59d-61ac-b28a8",
          "v3ad-9f69-9e42-4432-c7466",
          "v3ad-511a-b39f-f5bc-39b52",
          "v3ad-9341-87d1-1799-7f495",
          "v3ad-9d8c-a7a0-a5b3-f55e2",
        ];

        console.log(params);

        window.PrimoPreviewHandler.getHandler({
          creativeID: "v3ad-9f69-9e42-4432-c7466",
          device: "DESKTOP",
          orientation: "PORTRAIT",
        })
          .then((handler) => {
            console.log(handler);
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(window.PrimoPreviewHandler);
      } else {
        console.log("primo not available ");
      }
    });
  }, []);

  return (
    <div className="App">
      {loaded ? "Script Loaded" : "Script is Not Loaded"}
    </div>
  );
}

export default App;
