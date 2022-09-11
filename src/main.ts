//css
import "./styles/index.css";

// ts
import setupLoader from "./scripts/loader";
import headingAnimation from "./scripts/heading";
import expirenceComp from "./scripts/expirence";

async function main() {
  // await setupLoader();
  headingAnimation();
  expirenceComp();
  // particles();
}

main();
