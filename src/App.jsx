import { useEffect } from "react";
import "./App.css";

const App = () => {
  const externalJS = (callback) => {
    const root = document.getElementById("root");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://ps.visarity.com/demos/preview/handler.js"
    );
    script.onreadystatechange = callback;
    script.onload = callback;
    root.append(script);
  };
  useEffect(() => {
    externalJS(function () {
      // console.log("window", window);
      if (window.PrimoPreviewHandler) {
        // const params = [
        //   "v3ad-afce-910f-ceba-be8f6",
        //   "v3ad-d731-872a-a237-43f3f",
        //   "v3ad-e78c-9ee8-70d0-7e20d",
        //   "v3ad-6aec-9741-af36-d0883",
        //   "v3ad-4817-96f6-06d2-2710c",
        //   "v3ad-2171-8293-5adb-35160",
        //   "v3ad-abc7-a885-f790-5d1f4",
        //   "v3ad-3441-a59d-61ac-b28a8",
        //   "v3ad-9f69-9e42-4432-c7466",
        //   "v3ad-511a-b39f-f5bc-39b52",
        //   "v3ad-9341-87d1-1799-7f495",
        //   "v3ad-9d8c-a7a0-a5b3-f55e2",
        // ];
        // console.log(params);

        window.PrimoPreviewHandler.getHandler({
          creativeID: "v3ad-9f69-9e42-4432-c7466",
          device: "DESKTOP",
          orientation: "PORTRAIT",
        })
          .then((handler) => {
            console.log(handler);

            const a = document.getElementById("f1b");
            console.log(a, "hello");

            handler.setupPlayer(a, "", "", "DESKTOP");

            console.log(handler.info);
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(window.PrimoPreviewHandler,  "---->");
      } else {
        console.log("primo not available ");
      }
    });
  }, []);

  return (
    <div className="container-fluid ">
      <div className="main">
        <div className="box-1" id="box1"></div>
        <div className="box-2" id="box2"></div>
        <div className="box-container ">
          <div className="b-1" id="b1"></div>
          <div className="b-2" id="b2"></div>
        </div>
        <div className="box-3 ">
          <div className="feed-1">
            <div className="feed-1a">
              <div className="f-1a">
                <li className="li-1"></li>
                <li className="li-2"></li>
                <li className="li-3"></li>
                <li className="li-3"></li>
                <li className="li-3"></li>
                <li className="li-3"></li>
                <li className="li-3"></li>
                <li className="li-9"></li>
                <li className="li-3"></li>
              </div>
              <div className="f-1b" id="f1b"></div>
            </div>
            <div className="feed-2a ">
              <div className="feed-2b">
                <div className="f-2a" id="f2a"></div>
                <div className="f-2c">
                  <li className="li2-1"></li>
                  <li className="li2-2"></li>
                  <li className="li2-3"></li>
                  <li className="li2-4"></li>
                </div>
              </div>
              <div className="f-2b" id="f2b"></div>
            </div>
          </div>
          <div className="feed-3">
            <div className="feed-3a" id="f3a"></div>
          </div>
        </div>

        <div className="box-4" id="box4"></div>
      </div>
      <div className="main2"></div>
    </div>
  );
};
export default App;
