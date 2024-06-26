"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { JEELIZVTOWIDGET } from "jeelizvtowidget";


// import './index.css's
// import ControlButton from '../ControlButton';

export interface GlassArViewProps {
  modelname: string;
  canvaswidth: number;
  canvasheight: number;
  buttonBackgroundColor?: string;
  buttonFontColor?: string;
}

function initWidget(
  placeHolder: any,
  canvas: undefined,
  toggleLoading: { (isLoadingVisible: boolean): void; bind?: any }
) {
  JEELIZVTOWIDGET.start({
    placeHolder,
    canvas,
    callbacks: {
      ADJUST_START: null,
      ADJUST_END: null,
      LOADING_START: toggleLoading.bind(null, true),
      LOADING_END: toggleLoading.bind(null, false),
    },
    sku: "empty", // SKU loadded at the beginning
    // image displayed when face is not found:
    // searchImageMask: searchImage, //'https://appstatic.jeeliz.com/jeewidget/images/target.png',
    // searchImageColor: 0xeeeeee, // color of loading (face not found) animation
    // searchImageRotationSpeed: -0.001, // negative -> clockwise
    callbackReady: function () {
      console.log("INFO: JEELIZVTOWIDGET is ready :)");
    },
    onError: function (errorLabel: string) {
      // this function catches errors, so you can display custom integrated messages
      alert("An error happened. errorLabel =" + errorLabel);
      switch (errorLabel) {
        case "WEBCAM_UNAVAILABLE":
          // the user has no camera, or does not want to share it.
          break;

        case "INVALID_SKU":
          // the provided SKU does not match with a glasses model
          break;

        case "PLACEHOLDER_NULL_WIDTH":
        case "PLACEHOLDER_NULL_HEIGHT":
          // Something is wrong with the placeholder
          // (element whose id='JeelizVTOWidget')
          break;

        case "FATAL":
        default:
          // a bit error happens:(
          break;
      } // end switch
    }, // end onError()
  }); // end JEELIZVTOWIDGET.start call
}

export function VtoWidget(this: any, props: GlassArViewProps) {
  const refPlaceHolder = useRef<any>();
  const refCanvas = useRef<any>();
  const refLoading = useRef<any>();

  let glassImages = [
    "rayban_aviator_or_vertFlash",
    "rayban_wayfarer_havane_vert",
    "rayban_chris_noir_gun_bleu_mirroir",
    "polaroid_6003_blue_grey",
  ];

  const [modalName, setModalName] = useState("rayban_aviator_or_vertFlash");
  const [isheight, Setisheight] = useState(500);
  const [iswidth, Setwidth] = useState(500);
  const [adjustMode, setAdjustMode] = useState(false);

  const toggleLoading = (isLoadingVisible: any) => {
    refLoading.current.style.display = isLoadingVisible ? "block" : "none";
  };

  const StartadjustMode = () => {
    JEELIZVTOWIDGET.enter_adjustMode();
    setAdjustMode(true);
  };

  const ExitadjustMode = () => {
    JEELIZVTOWIDGET.exit_adjustMode();
    setAdjustMode(false);
  };

  function setGlassesModel(sku: string) {
    JEELIZVTOWIDGET.load(sku);
  }

  useEffect(() => {
    if (typeof window === "undefined") {
        return; 
    }
    const placeHolder = refPlaceHolder.current;
    const canvas = refCanvas.current;
    if (placeHolder && canvas) {
        initWidget(placeHolder, canvas, toggleLoading);
    }
    return () => {
        JEELIZVTOWIDGET.destroy();
    };
}, []);

  useEffect(() => {
    setModalName(props.modelname);
  }, [props.modelname]);
  useEffect(() => {
    Setisheight(props.canvasheight);
  }, [props.canvasheight]);
  useEffect(() => {
    Setwidth(props.canvaswidth);
  }, [props.canvaswidth]);
  // useEffect(()=>{
  //   JEELIZVTOWIDGET.load(ismodalName);
  // },[ismodalName])

  return (
    <div>
      <div className="mx-auto">
        <div ref={refPlaceHolder} style={{ height: isheight, width: iswidth }}>
          <canvas ref={refCanvas}></canvas>

          <div ref={refLoading}>
            <div className="JeelizVTOWidgetLoadingText">
              Setting up widget...
            </div>
          </div>
        </div>

        <div>
          {adjustMode ? (
            <div>
              <div>Move the glasses to adjust them.</div>
              <div>
                <button onClick={ExitadjustMode}>Quit</button>
              </div>
            </div>
          ) : (
            <div className="flex space-x-2 space-y-2">
              <button
                className="bg-blue-500 rounded-lg mx-auto my-2 px-3 py-2 text-white"
                onClick={StartadjustMode}
              >
                Adjust
              </button>
              {/* <button
                className="bg-blue-500 rounded-lg px-3 py-2 text-white"
                onClick={() => {
                  setGlassesModel(modalName);
                }}
              >
                Model
              </button> */}
            </div>
          )}
        </div>
      </div>

      <div className="flex">
        {glassImages.map((image: string) => (
          <Image
            src={`/glassImages/${image}.jpg`}
            width="150"
            height="150"
            alt="glass image"
            className="mx-4"
            onClick={() => {
              setGlassesModel(image);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default VtoWidget;
