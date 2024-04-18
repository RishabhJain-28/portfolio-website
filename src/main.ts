import "./styles/index.css";
import "./styles/header.css";

import setupLoader from "./scripts/loader";
import headingAnimation from "./scripts/heading";
import expirenceComp from "./scripts/timeline";
import skills from "./scripts/skills";
import project_spline from "./scripts/projects_spline";

async function main() {
  if (true) {
    project_spline()?.catch(() => {
      alert("failed to load spline");
    });
    await setupLoader();
  } else {
    const loadingScreen = document.getElementById("loaderScreen");

    //TODO intstead of remove desolve and remove
    loadingScreen?.remove();
  }

  headingAnimation();
  const body = document.getElementsByTagName("body")[0];
  body.style.overflow = "auto";
  skills();
  expirenceComp();
  setupCopyEmail();
}

const setupCopyEmail = () => {
  const emailCopyATag = document.getElementById("emailCopyATag");
  const emailCopyText = document.getElementById("emailCopyText");

  emailCopyATag?.addEventListener("click", () => {
    navigator.clipboard.writeText(`rishabhnjain@gmail.com`);

    emailCopyText!.innerText = "copied!";
  });
  emailCopyATag?.addEventListener("mouseleave", () => {
    emailCopyText!.innerText = "copy";
  });
};

main();
