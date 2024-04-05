import { Application } from "@splinetool/runtime";

export default () => {
  const canvas = document.getElementById("canvas3d") as HTMLCanvasElement;
  if (!canvas) {
    console.error("canvas for spline not found");
    return;
  }
  console.log("1");

  return new Promise((resolve) => {
    const app = new Application(canvas);

    app
      .load("https://prod.spline.design/gAkqjhMCFVJZ0ZO2/scene.splinecode")
      .then(() => {
        function setZoomBasedOnScreenSize(
          app: Application,
          canvas: HTMLCanvasElement
        ) {
          const width = canvas.getBoundingClientRect().width;

          // app.setZoom(0.5);
        }

        window.addEventListener("resize", (e) => {
          setZoomBasedOnScreenSize(app, canvas);
        });

        setZoomBasedOnScreenSize(app, canvas);
        resolve(true);
      });
  });
};
