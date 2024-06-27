"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
// import { JEELIZVTOWIDGET } from "jeelizvtowidget";
// glassesDBURL: "https://glassesdbcached.jeeliz.com/sku/", appstaticURL: "https://appstatic.jeeliz.com/"
if (typeof window !== "undefined") {
  const { JEELIZVTOWIDGET } = require("jeelizvtowidget");
}

function initWidget(
  placeHolder: any,
  canvas: undefined,
  toggleLoading: { (isLoadingVisible: boolean): void; bind?: any },
  glassModel: string
) {
  if (typeof window !== "undefined") {
    const JEELIZVTOWIDGET = require("jeelizvtowidget").JEELIZVTOWIDGET;
    JEELIZVTOWIDGET.start({
      placeHolder,
      canvas,
      callbacks: {
        ADJUST_START: null,
        ADJUST_END: null,
        LOADING_START: toggleLoading.bind(null, true),
        LOADING_END: toggleLoading.bind(null, false),
      },
      sku: glassModel, // SKU loadded at the beginning
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
}

export interface GlassArViewProps {
  modelname: string;
  canvaswidth: number;
  canvasheight: number;
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
    "polaroid_6003_blue_grey",
    "polaroid_6003_blue_grey",
    "polaroid_6003_blue_grey",
    "polaroid_6003_blue_grey",
    "polaroid_6003_blue_grey",
    "polaroid_6003_blue_grey",
    "polaroid_6003_blue_grey",
    "polaroid_6003_blue_grey",
    "polaroid_6003_blue_grey",
    "polaroid_6003_blue_grey",
    "polaroid_6003_blue_grey",
    "polaroid_6003_blue_grey",
    "polaroid_6003_blue_grey",
  ];

  const [modelName, setModelName] = useState("");
  const [isheight, Setisheight] = useState(500);
  const [iswidth, Setwidth] = useState(500);
  // const [adjustMode, setAdjustMode] = useState(false);

  const toggleLoading = (isLoadingVisible: boolean) => {
    if (refLoading.current) {
      refLoading.current.style.display = isLoadingVisible ? "block" : "none";
    } else {
      console.log("Loading ref is not yet initialized");
    }
  };

  const StartadjustMode = () => {
    if (typeof window !== "undefined") {
      const JEELIZVTOWIDGET = require("jeelizvtowidget").JEELIZVTOWIDGET;
      JEELIZVTOWIDGET.enter_adjustMode();
      // setAdjustMode(true);
    }
  };

  const ExitadjustMode = () => {
    if (typeof window !== "undefined") {
      const JEELIZVTOWIDGET = require("jeelizvtowidget").JEELIZVTOWIDGET;
      JEELIZVTOWIDGET.exit_adjustMode();
      // setAdjustMode(false);
    }
  };

  function setGlassesModel(sku: string) {
    console.log(sku, "*****************");
    if (typeof window !== "undefined") {
      const JEELIZVTOWIDGET = require("jeelizvtowidget").JEELIZVTOWIDGET;
      JEELIZVTOWIDGET.load(sku);
    }
  }

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    } else {
      const placeHolder = refPlaceHolder.current;
      const canvas = refCanvas.current;
      if (placeHolder && canvas) {
        initWidget(placeHolder, canvas, toggleLoading, props.modelname);
      }

      // setGlassesModel(props.modelname);
      return () => {
        if (typeof window !== "undefined") {
          const JEELIZVTOWIDGET = require("jeelizvtowidget").JEELIZVTOWIDGET;
          JEELIZVTOWIDGET.destroy();
        }
      };
    }
  }, []);

  useEffect(() => {
    Setisheight(props.canvasheight);
  }, [props.canvasheight]);
  useEffect(() => {
    Setwidth(props.canvaswidth);
  }, [props.canvaswidth]);
  useEffect(() => {
    if (props.modelname !== "empty") {
      setGlassesModel(props.modelname);
    }
  }, [props.modelname]);

  return (
    <div>
      {/* <div className="grid grid-cols-2 overflow-y-scroll h-[80vh]">
        {glassImages.map((image: string) => (
          <Image
            src={`/glassImages/${image}.jpg`}
            width="150"
            height="150"
            alt="glass image"
            className={`mx-4 max-w-40 max-h-40  ${modalName===image?'border border-green-500':''}`}
            onClick={() => {
              setGlassesModel(image);
              setModalName(image)
            }}
          />
        ))}
      </div> */}

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Fit</h1>
          <p className="text-muted-foreground mb-8">
            Try on different glasses frames virtually and see how they look on
            you.
          </p>
          <div className="flex items-center gap-4">
            <Button
              onClick={() => {
                StartadjustMode();
              }}
              className="inline-flex items-center justify-center h-10 px-4 rounded-md bg-primary text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
            >
              Adjust
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                ExitadjustMode();
              }}
              className="inline-flex items-center justify-center h-10 px-4 rounded-md border border-input shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Exit
            </Button>
          </div>
        </div>

        <div
          ref={refPlaceHolder}
          className="mx-auto block w-full h-64 md:h-96"
          // style={{ height: isheight, width: iswidth }}
        >
          <canvas ref={refCanvas} className="rounded-2xl"></canvas>

          <div ref={refLoading} className="mx-auto my-auto items-center justify-center flex w-full h-64 md:h-96">
            Powering up the AI...
          </div>
        </div>
      </section>

      <div>
        {/* <div className="flex space-x-2 space-y-2">
          {!adjustMode ? (
            <button
              className="bg-blue-500 rounded-lg mx-auto my-2 px-3 py-2 text-white"
              onClick={StartadjustMode}
            >
              Adjust
            </button>
          ) : (
            <button
              className="bg-blue-500 rounded-lg mx-auto my-2 px-3 py-2 text-white"
              onClick={ExitadjustMode}
            >
              Exit
            </button>
          )}
        </div> */}
      </div>
    </div>
  );
}

export default VtoWidget;
