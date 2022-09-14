//css
import "./styles/index.css";
import "./styles/header.css";
import "./styles/loader.css";
// import "./styles/timeline.css";
import "./styles/projects.css";

// ts
import setupLoader from "./scripts/loader";
import headingAnimation from "./scripts/heading";
import expirenceComp from "./scripts/timeline";
import projects from "./scripts/projects";

async function main() {
  // await setupLoader();
  // headingAnimation();
  projects();
  expirenceComp();
}

main();
