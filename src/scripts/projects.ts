export default () => {
  const projCardsShine = document.querySelectorAll<HTMLDivElement>(".shine");

  projCardsShine.forEach((el: HTMLDivElement) => {
    el.style.setProperty("--animation-time", Math.random() * 10 + "s");
  });
};
