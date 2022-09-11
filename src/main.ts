//css
import "./styles/index.css";

// ts
import setupLoader from "./scripts/loader";
import headingAnimation from "./scripts/heading";
import expirenceComp from "./scripts/expirence";
// import background from "./scripts/background";

async function main() {
  await setupLoader();
  // background();

  headingAnimation();
  expirenceComp();
}

main();
