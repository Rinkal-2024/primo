import { useEffect } from "react";
import { useLocation, useNavigate, } from "react-router-dom";

import "./App.css";
const App = () => {
  const location = useLocation();
  const navigate = useNavigate()
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
    const searchParams = new URLSearchParams(location.search);
    const creativeID = searchParams.get('creativeID');
    if (window.location.search.length === 0) {
      navigate({
        pathname: "/",
        search: "?creativeID=v3ad-e78c-9ee8-70d0-7e20d",
      });
    }
    if (!creativeID) {
      console.error('Missing required parameters in the URL give the creativeID');
      return;
    }
    externalJS(function () {
      // console.log("window", window);
   
      if (window.PrimoPreviewHandler) {
        const box1 = document.getElementById("box1");
        const box2 = document.getElementById("box2");
        const f1b = document.getElementById("f1b");
        const f2a = document.getElementById("f2a");
        const f2b = document.getElementById("f2b");
        const f3a = document.getElementById("f3a");
        const box4 = document.getElementById("box4");
        const b1 = document.getElementById("b1");
        const b2 = document.getElementById("b2");

        window.PrimoPreviewHandler.getHandler({
          creativeID: creativeID,
          // Events: (event) => {
          //   console.log("Ad Event:", event);
          // },
        }).then((handler) => {
          const width = handler.info.width;
          const height = handler.info.height;
          console.log("Handler dimensions:", { height, width });
          console.log("Handler object:", handler.info);
          if (height <= 160 && height >= 100 && width <= 970 && width >= 900) {
            return handler.setupPlayer(box1, " DESKTOP", {});
          } else if (height <= 250 && height >= 161 && width <= 970 && width >= 800) {
            return handler.setupPlayer(box2, "DESKTOP ", {});
          } else if (height <= 250 && height >= 201 && width <= 300 && width >= 200) {
            return handler.setupPlayer(f1b, "DESKTOP", {});
          } else if (height <= 200 && height >= 150 && width <= 302 && width >= 200) {
            return handler.setupPlayer(f2a, "DESKTOP", {});
          } else if (height <= 280 && height >= 200 && width <= 336 && width >= 303) {
            return handler.setupPlayer(f2b, "DESKTOP", {});
          } else if (height <= 600 && height >= 400 && width <= 320 && width >= 100) {
            return handler.setupPlayer(f3a, "DESKTOP", {});
          } else if (height <= 160 && height >= 100 && width <= 970 && width >= 800) {
            return handler.setupPlayer(box4, "DESKTOP", {});
          } else if (height <= 90 && height >= 10 && width <= 728 && width >= 235) {
            return handler.setupPlayer(b1, " DESKTOP", {});
          } else if (height <= 90 && height >= 10 && width <= 234 && width >= 100) {
            return handler.setupPlayer(b2, "DESKTOP ", {});
          }
        }).then((player) => {
          console.log("player setup complete", player);
        })
          .catch((error) => {
            console.error("Error in player:", error);
          });

      } else {
        console.error("PrimoPreviewHandler is not available");
      }
    });
  });

  return (
    <>
      <div className="Header">
        <div className="header-text">
        <b className="text ">PREVIEW</b>
        <b className="text ms-2">Scroll2Animate 300x250 Inline</b></div>

        <div className="header-icon">
        <span>
        <img className="me-1" src="https://primo-app.vercel.app/static/media/mobiledefault.ba6ea1d67c509efd9b8e7da634edfe25.svg" id="myImg"></img>
        </span>
        <span className="desktop">
        <img className="me-1" src="https://primo-app.vercel.app/static/media/desktopdefault.d9d966935b9e5559e5ad471fb9a454c9.svg"></img>
        <span className="rectangle">
        <img src="https://primo-app.vercel.app/static/media/Rectangle2.974ed8f98a734d787a93de3b98260e03.svg"/></span>
        </span>
        <span>
        <img className="me-1 " src="https://primo-app.vercel.app/static/media/canvasdefault.918034f69bf57230245889f37219c73a.svg"/>
        </span>
        </div>
      </div>

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
    
      </div>
      <div className="qr">
      <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
      <div className="qr_info">
      <span className="qr_title">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info" className="svg-inline--fa fa-info mx-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
      <path fill="currentColor" d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"></path></svg>Creative info</span>
      <span className="device_res"></span>
      </div>
      </button>
      </h2>
      </div>


      </div>

      
      <div className="footer"></div>
    </>
  );
};
export default App;
