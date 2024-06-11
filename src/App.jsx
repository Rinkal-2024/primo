import { useEffect } from "react";
import { useLocation, useNavigate, } from "react-router-dom";
import {qrcode} from "qrcode"

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
    console.log(searchParams , 'sp');
    console.log(creativeID , "ci");
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
      <span className="qr_title">
      <img src="https://primo-app.vercel.app/static/media/caret-down.8ff183b91897ed9d706f.svg"></img>
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info" className="svg-inline--fa fa-info mx-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
      <path fill="currentColor" d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"></path>
      </svg>Creative info
      <span className="device_res">{}</span>
      </span>
      <div className="accordion-body">
      <div className="qr_body">
      <div className="device_layout">
      <img src= {`https://ps.visarity.com/campaigns/{creativeID}/splash.jpg`} alt=""className="img"/> 
      </div>
      <div className="device_info">
      <div className="d-info1">
      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" className="svg-inline--fa fa-square " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="currentColor" d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z"></path></svg>
      <span>INFEED</span>
      </div>
      <div className="d-info2">
      <div> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile" className="svg-inline--fa fa-mobile " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z">
      </path></svg> <span>Mobile</span>
       </div>
       <div> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="desktop" className="svg-inline--fa fa-desktop " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
       <path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z">
       </path></svg> <span>Desktop</span> </div>
      </div>
      <div className="d-info3">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="expand" className="svg-inline--fa fa-expand " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z">
      </path></svg>
      <span>Responsive disabled<br />Preview: 9:16 (1:1.77)</span>
      </div>
      <div className="d-info4">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="video" className="svg-inline--fa fa-video " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z">
      </path></svg>
      <span>Video disabled</span>
      </div>
      <div className="d-info5">
      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="paper-plane" className="svg-inline--fa fa-paper-plane " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="currentColor" d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z">
      </path></svg>
      <span>2.738 MB (max 2.5MB)</span>
      </div>
      </div>
      <div className="device_qr">{qrcode}
      <span id="copy_qrcode">
      <div className="p-0 m-0 device_qrcode " id="qrcode" >
      </div>
      <div className="download_qr">Download <br />QR Code
      </div>
      <div id="qrcode-download">
      </div>
      </span>
          </div>     
      </div>
      </div>
      </div>

      <div className="player_area">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-rotate-right" className="svg-inline--fa fa-arrow-rotate-right mx-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="currentColor" d="M370.3 160H320c-17.7 0-32 14.3-32 32s14.3 32 32 32H448c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L398.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L370.3 160z">
      </path>
      </svg>
      <span className="play_time px-2">30.00</span>
      <img src="https://primo-app.vercel.app/static/media/Icon(2).a69916613c7a934edb01348a4c98d157.svg" className= "player"/>
      </div>

   

      <div className="footer"></div>
    </>
  );
};
export default App;
