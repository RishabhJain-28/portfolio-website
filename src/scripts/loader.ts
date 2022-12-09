export default () => {
  const loadingScreen = document.getElementById("loader") as HTMLDivElement;

  return new Promise((resolve) => {
    loadingScreen.addEventListener("animationend", function () {
      loadingScreen.classList.add("hidden");
      resolve(true);
    });
  });
};
