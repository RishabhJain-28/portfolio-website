import { Application } from "@splinetool/runtime";

export default () => {
  const canvas = document.getElementById("canvas3d") as HTMLCanvasElement;
  if (!canvas) {
    console.error("canvas for spline not found");
    return;
  }

  return new Promise((resolve) => {
    const app = new Application(canvas);

    app.load("/projects/scene.splinecode").then(() => {
      console.log("Das2");

      app.addEventListener("mouseHover", (e) => {
        console.log("I have been hovered!", e);
      });
      app.addEventListener("mouseDown", (e) => {
        console.log("I have been clicked!", e);
      });
      resolve(true);
    });
  });
};
