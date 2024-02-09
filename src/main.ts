import "./styles/index.css";
import "./styles/header.css";
import "./styles/loader.css";
import "./styles/projects.css";

import setupLoader from "./scripts/loader";
import headingAnimation from "./scripts/heading";
import expirenceComp from "./scripts/timeline";
import projects from "./scripts/projects";
import skills from "./scripts/skills";

async function main() {
  await setupLoader();
  headingAnimation();
  skills();
  projects();
  expirenceComp();
  copyEmail();
}

const copyEmail = () => {
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
