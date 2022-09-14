// export default () => {
//   const projCardsShine = document.querySelectorAll<HTMLDivElement>(".shine");
const radius = 400; // how big of the radius
const autoRotate = true; // auto rotate or not
const rotateSpeed = -60; // unit: seconds/360 degrees
const imgWidth = 120; // width of images (unit: px)
const imgHeight = 170; // height of images (unit: px)

import { Project, TechStack } from "../types";

//   projCardsShine.forEach((el: HTMLDivElement) => {
//     el.style.setProperty("--animation-time", Math.random() * 10 + "s");
//   });
// };
const tproj: Project = {
  title: "Arcadium",
  bulletPoints: [],
  description:
    " Created a completely online monopoly game with features like live player rooms, 3D components integration, chat rooms etc. Also integrated external 3D blender made components with the React based frontend.Technologies used: MERN Stack, ReactThreeJS, SocketJS",
  img: ["/p2.png"],
  link: "",
  techStack: [TechStack.JavaScript, TechStack.NodeJS, TechStack.React],
};

const projects: Project[] = new Array(5).fill(5).map((i) => tproj);

export default () => {
  const projectContainer = document.getElementById("spin-container");

  projects.forEach((project) => {
    const divEle = document.createElement("div");
    divEle.className =
      "project_container_div text-sm w-[300px] h-[500px] rounded-xl";
    divEle.innerHTML = `

      <img src="/p2.png" alt="" class="rounded-xl" />
                  <div
                    class="my-4 p-3 rounded-lg bg-[#111] opacity-80 text-white"
                  >
                    <h1 class="mb-2 text-5xl ">Arcadium</h1>
                    <p class="">
                      Created a completely online monopoly game with features
                      like live player rooms, 3D components integration, chat
                      rooms etc. Also integrated external 3D blender made
                      components with the React based frontend.Technologies
                      used: MERN Stack, ReactThreeJS, SocketJS
                    </p>
                    <div class="flex flex-wrap">
                      <div class="flex gap-2 items-center transition-all m-2">
                        <img src="/icons/typescript.svg" class="w-5 h-5" />
                        <h1 class="">typescript</h1>
                      </div>
                      <div class="flex gap-2 items-center transition-all m-2">
                        <img src="/icons/js.svg" class="w-5 h-5" />
                        <h1 class="">JavaScript</h1>
                      </div>
                      <div class="flex gap-2 items-center transition-all m-2">
                        <img src="/icons/js.svg" class="w-5 h-5" />
                        <h1 class="">JavaScript</h1>
                      </div>
                    </div>
                  </div>
    
    
    `;

    projectContainer?.appendChild(divEle);
  });
  console.log(projectContainer);

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
  console.log(aImg);
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

  var sX,
    sY,
    nX,
    nY,
    desX = 0,
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

  //   // add background music
  //   if (bgMusicURL) {
  //     document.getElementById("music-container").innerHTML += `
  // <audio src="${bgMusicURL}" ${
  //       bgMusicControls ? "controls" : ""
  //     } autoplay loop>
  // <p>If you are reading this, it is because your browser does not support the audio element.</p>
  // </audio>
  // `;
  //   }

  // setup events
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

    this.onpointerup = function (e) {
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
