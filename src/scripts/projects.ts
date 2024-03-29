const radius = 470; // how big of the radius
const autoRotate = true; // auto rotate or not
const rotateSpeed = -60; // unit: seconds/360 degrees
const imgWidth = 120; // width of images (unit: px)
const imgHeight = 170; // height of images (unit: px)

import { Project, TechStack, teckstackItemImage } from "../types";

const projects: Project[] = [
  {
    // ● Technologies used: ReactJS, ExpressJS,SupabaseDb,
    // SaltStack, c#, win32 API,bash
    title: "AutoBot",
    bulletPoints: [
      "Autobot is a extensible scripting language that allows you to make shortcuts and other automation workflows quickly",
      "has REPL, transpile and interpreter modes of operation",
    ],
    description: "Rust based scripting language",
    img: ["/projects/autobot.png"],
    link: "",
    techStack: [TechStack.Rust],
    github: "https://github.com/RishabhJain-28/autobot",
  },
  {
    // ● Technologies used: ReactJS, ExpressJS,SupabaseDb,
    // SaltStack, c#, win32 API,bash
    title: "BOLT",
    bulletPoints: [
      "Bolt is a system that tracks applications installed on minion workstations and allows admin to remotely uninstall unwanted softwares, execute terminal commands and log the user out.",
    ],
    description: "Master-Minion Configuration Management tool ",
    img: ["/projects/bolt.png"],
    link: "",
    techStack: [
      TechStack.Electron,
      TechStack.React,
      TechStack.AntDesign,
      TechStack.NodeJS,
      TechStack.Express,
      TechStack.SupabaseDB,
      TechStack.Docker,
      TechStack.Bash,
      TechStack.Win32APIs,
      TechStack.Linux,
      TechStack.SaltStack,
    ],
    github: "https://github.com/Altas-Bolt",
  },
  {
    title: "NFT Galaxy",
    bulletPoints: [
      "A platform to buy, create and sell NFTs on Polygon’s Proof of Stake chain.",
    ],
    description: "NFT Marketplace",
    img: ["/projects/nftGalaxy.png"],
    link: "https://nft-marketplace-umber.vercel.app/",
    techStack: [
      TechStack.Solidity,
      TechStack.Polygon,
      TechStack.Hardhat,
      TechStack.IPFS,
      TechStack.JavaScript,
      TechStack.NextJs,
      TechStack.Tailwind,
    ],
    github: "https://github.com/RishabhJain-28/nft-marketplace",
  },
  {
    title: "Arcadium",
    bulletPoints: [
      "ReactThreeJs based Realtime 3D monopoly game with features like live player rooms, 3D components integration, chat rooms etc. ",
    ],
    description: "3D coding Monoply",
    img: ["/projects/arcadium.png"],
    link: "",
    techStack: [
      TechStack.JavaScript,
      TechStack.ThreeJs,
      TechStack.React,
      TechStack.NodeJS,
      TechStack.MongoDB,
      TechStack.Express,
      TechStack.SocketIO,
    ],
    github: "https://github.com/OWASP-STUDENT-CHAPTER/arcadium",
  },
];

export default () => {
  animatedPatformProjectsdisplay();
};

const animatedPatformProjectsdisplay = () => {
  const projectContainer = document.getElementById("spin-container");

  projects.forEach((project) => {
    const divEle = document.createElement("div");
    divEle.className =
      "project_container_div text-sm w-[300px] h-[500px] rounded-xl   ";
    divEle.innerHTML = `

      <img src="${project.img[0]}" alt="" class="rounded-xl " />
                  <div
                    class="my-4 p-3 h-full  flex flex-col  rounded-lg bg-[#111] opacity-80 text-white max-h-[320px] overflow-y-auto customScroll "
                  >
                  <div class="mb-2 flex justify-between">
                  <h1 class="text-3xl">${project.title}</h1>
                  <div class="flex justify-center items-end gap-2">
                  ${
                    project.github
                      ? `<a
                      target="_blank"
                      class="gitLinkA mb-1"
                      href="${project.github}"
                    >
                      <img class="w-4" src="/icons/github-64px.png" />
                    </a> `
                      : ""
                  }

                    ${
                      project.link
                        ? ` <a
                      target="_blank"
                      class="mb-1 text-white"
                      href="${project.link}"
                    >
                      <img class="w-4" src="/icons/link.svg" />
                    </a> `
                        : ""
                    }
                  </div>
                </div>
                <h1 class="m-1 mb-2 text-lg text-gray-400">
                ${project.description}
              </h1>
                    <p class="h-[100px]">
                    ${project.bulletPoints[0]}
                    </p>
                   
                    <div class="flex flex-wrap ">
                    ${project.techStack.reduce((prev, ele) => {
                      return (
                        prev +
                        `
                      <div class="flex gap-2 items-center transition-all m-2">
                        <img src="${teckstackItemImage[ele]}" class="w-5 h-5" />
                        <h1 class="">${ele}</h1>
                      </div>
                        `
                      );
                    }, "")} 
                  
                    </div>
                  </div>
    
    
    `;

    projectContainer?.appendChild(divEle);
  });

  animateProjects();
};
const animateProjects = () => {
  /*
     NOTE:
       + imgWidth, imgHeight will work for video
       + if imgWidth, imgHeight too small, play/pause button in <video> will be hidden
*/

  // animation start after 1000 miliseconds
  setTimeout(init, 1000);

  const odrag = document.getElementById("drag-container") as HTMLDivElement & {
    timer: number;
  };

  const ospin = document.getElementById("spin-container") as HTMLDivElement;

  const aImg = ospin.querySelectorAll<HTMLDivElement>(".project_container_div");
  // @ts-ignore
  const aEle = [...aImg];

  // Size of images
  ospin.style.width = imgWidth + "px";
  ospin.style.height = imgHeight + "px";

  const ground = document.getElementById("ground");
  if (!ground) {
    throw new Error("[project animations] ground container not found");
  }
  ground.style.width = radius * 3 + "px";
  ground.style.height = radius * 3 + "px";

  function init(delayTime: number) {
    for (var i = 0; i < aEle.length; i++) {
      aEle[i].style.transform =
        "rotateY(" +
        i * (360 / aEle.length) +
        "deg) translateZ(" +
        radius +
        "px)";
      aEle[i].style.transition = "transform 1s";
      aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
    }
  }

  function applyTranform(obj: HTMLDivElement & { timer: number }) {
    // Constrain the angle of camera (between 0 and 180)
    if (tY > 180) tY = 180;
    if (tY < 0) tY = 0;

    // Apply the angle
    obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
  }

  function playSpin(isPlaying: boolean) {
    ospin.style.animationPlayState = isPlaying ? "running" : "paused";
  }

  let desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

  // auto spin
  if (autoRotate) {
    var animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
    ospin.style.animation = `${animationName} ${Math.abs(
      rotateSpeed
    )}s infinite linear`;
  }

  // setup
  document.onpointerdown = function (e) {
    clearInterval(odrag.timer);
    e = e || window.event;
    var sX = e.clientX,
      sY = e.clientY;

    this.onpointermove = function (e) {
      e = e || window.event;
      var nX = e.clientX,
        nY = e.clientY;
      desX = nX - sX;
      desY = nY - sY;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      sX = nX;
      sY = nY;
    };

    this.onpointerup = function () {
      odrag.timer = setInterval(function () {
        desX *= 0.95;
        desY *= 0.95;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTranform(odrag);
        playSpin(false);
        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
          clearInterval(odrag.timer);
          playSpin(true);
        }
      }, 17);
      this.onpointermove = this.onpointerup = null;
    };

    return false;
  };

  // document.onmousewheel = function (e) {
  //   e = e || window.event;
  //   var d = e.wheelDelta / 20 || -e.detail;
  //   radius += d;
  //   init(1);
  // };
};
