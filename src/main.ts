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
  copyEmail();
  // copyPhone();
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
const copyPhone = () => {
  const phoneCopyATag = document.getElementById("phoneCopyATag");
  const phoneCopyText = document.getElementById("phoneCopyText");

  phoneCopyATag?.addEventListener("click", () => {
    navigator.clipboard.writeText(`+91-9953038121`);

    phoneCopyText!.innerText = "copied!";
  });
  phoneCopyATag?.addEventListener("mouseleave", () => {
    phoneCopyText!.innerText = "copy";
  });
};

main();
