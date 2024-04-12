import { Application } from "@splinetool/runtime";
const BOLT_OBJECT_ID = "45e1b6cf-e768-4281-bcec-aa506380a8e3";
const AUTOBOT_OBJECT_ID = "8f808de8-da58-4615-86b6-85fe525d0842";
const NFT_GALAXY_OBJECT_ID = "08bf50bb-b704-4fae-81e9-409500577bbb";
const ARCADIUM_OBJECT_ID = "9f22fd25-aad5-46f8-abb8-4f88f48c150a";

const GITHUB_LINK_BUTTON_OBJECT_ID = "625661c0-3160-48ec-b237-23d51ec7f6b6";
const VAR_SCENE_STATE = "SceneState";

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
  [NFT_GALAXY_OBJECT_ID]: {
    name: "NFT Galaxy",
    github: "https://github.com/RishabhJain-28/nft-marketplace",
  },
  [ARCADIUM_OBJECT_ID]: {
    name: "Arcadium",
    github: "https://github.com/OWASP-STUDENT-CHAPTER/arcadium",
  },
};
let selectedProject: SplineProject | null = null;

export default () => {
  const canvas = document.getElementById("canvas3d") as HTMLCanvasElement;

  return new Promise((resolve, reject) => {
    if (!canvas) {
      console.error("canvas for spline not found");
      return reject();
    }
    const app = new Application(canvas, {
      // renderMode: "",
    });
    //TODO check if it works
    app.setUIWasmUrl("/assets/process.wasm");

    app
      .load("/projects/scene.splinecode")
      // .load("https://prod.spline.design/N44PWr450iSeMm8Q/scene.splinecode")
      .then(() => {
        window.addEventListener("resize", () => {
          if (window.innerWidth < 600) {
            app.setVariable(VAR_SCENE_STATE, "small");
          } else {
            app.setVariable(VAR_SCENE_STATE, "large");
          }
        });

        window.SPLINE_LOADED = true;
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
            case GITHUB_LINK_BUTTON_OBJECT_ID: {
              console.log("here", selectedProject);
              if (selectedProject?.github)
                window.open(selectedProject.github, "_blank");
            }
          }
        });

        if (window.innerWidth < 600) {
          app.setVariable(VAR_SCENE_STATE, "small");
        } else {
          app.setVariable(VAR_SCENE_STATE, "large");
        }
        resolve(true);
      })
      .catch(reject);
  });
};
