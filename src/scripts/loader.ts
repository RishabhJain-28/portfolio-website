export default () => {
  let count = 0;

  const loaderDiv = document.getElementById("loader");
  if (!loaderDiv) {
    console.log("loader fdiv not found");
    return;
  }

  return new Promise((resolve) => {
    const startLoader = () => {
      console.log(window.SPLINE_LOADED);
      if (count < 60 || window.SPLINE_LOADED) {
        count = count + 1;
      }

      loaderDiv.setAttribute("style", `width:${count}% `);

      if (count < 100) {
        requestAnimationFrame(startLoader);
      } else {
        resolve(true);
        const loadingScreen = document.getElementById("loaderScreen");

        //TODO intstead of remove desolve and remove
        loadingScreen?.remove();
      }
    };
    startLoader();
  });
};
