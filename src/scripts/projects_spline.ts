import { Application } from "@splinetool/runtime";
const BOLT_OBJECT_ID = "45e1b6cf-e768-4281-bcec-aa506380a8e3";
const AUTOBOT_OBJECT_ID = "8f808de8-da58-4615-86b6-85fe525d0842";

const GITHUB_LINK_BUTTON_OBECT_ID = "625661c0-3160-48ec-b237-23d51ec7f6b6";

type SplineProject = {
  name: string;
  github: string;
  link?: string;
};
const projects: {
  [key: string]: SplineProject;
} = {
  [BOLT_OBJECT_ID]: {
    name: "Bolt",
    github: "https://github.com/Altas-Bolt",
  },
  [AUTOBOT_OBJECT_ID]: {
    name: "Autobot",
    github: "https://github.com/RishabhJain-28/autobot",
  },
};
let selectedProject: SplineProject | null = null;

export default () => {
  const canvas = document.getElementById("canvas3d") as HTMLCanvasElement;

  if (!canvas) {
    console.error("canvas for spline not found");
    return;
  }

  return new Promise((resolve) => {
    const app = new Application(canvas);
    app
      .load("https://prod.spline.design/gAkqjhMCFVJZ0ZO2/scene.splinecode")
      .then(() => {
        selectedProject = projects[BOLT_OBJECT_ID]; //TODO CHANGE
        app.addEventListener("mouseDown", (e) => {
          //? ignore scene clicks ?
          console.log("click", e.target);
          const proj = projects[e.target.id];
          console.log(proj);
          if (proj) {
            selectedProject = proj;
          }

          switch (e.target.id) {
            case GITHUB_LINK_BUTTON_OBECT_ID: {
              console.log("here", selectedProject);
              if (selectedProject?.github)
                window.open(selectedProject.github, "_blank");
            }
          }
        });

        resolve(true);
      });
  });
};
