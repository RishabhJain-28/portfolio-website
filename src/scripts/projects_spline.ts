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
        resolve(true);
      });
  });
};
