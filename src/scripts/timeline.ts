import { Expirence, TechStack } from "../types";

const timeline: Expirence[] = [
  {
    title: "Hallparty",
    bulletPoints: [
      "Developed frontend applications with responsive UI and integrated new features like messaging, search, onboarding, multi-space authentication, liveface-mojis etc.",
      "Identified performance bottlenecks and improved code loading and responsiveness.",
      "Worked with AgoraRTC client to implement videochat and integrated an in-app music player using Spotify",
    ],
    from: "January 2022",
    to: "June 2022",
    position: "Frontend Developer Intern",
    techStack: [
      TechStack.ts,
      TechStack.nextjs,
      TechStack.react,
      TechStack.redux,
      TechStack.graphQL,
      TechStack.redux,
    ],
    link: "https://www.hallparty.app",
    img: [
      "/timeline/hallparty/homepage.png",
      "/timeline/hallparty/landing.png",
    ],
  },
  {
    title: "Harmony",
    bulletPoints: [
      "A web platform for real time tracking of harmony ONE token metrics such as price, market capitalization and volume.",
      "Created a fullstack application where users can see and analyse all majority/native tokens that exist on the Harmony network.",
    ],
    from: "January 2021",
    to: "May 2021",
    position: "Freelance Web Developer",
    techStack: [
      TechStack.ts,
      TechStack.nextjs,
      TechStack.react,
      TechStack.redux,
      TechStack.graphQL,
      TechStack.redux,
    ],
    link: "",
    img: ["/project.jpg"],
  },
  {
    title: "OWASP Student Chapter",
    bulletPoints: [
      "Developed frontend applications with responsive UI and integrated new features like messaging, search, onboarding, multi-space authentication, liveface-mojis etc.",
      "Identified performance bottlenecks and improved code loading and responsiveness.",
      "Worked with AgoraRTC client to implement videochat and integrated an in-app music player using Spotify",
    ],
    from: "October 2019",
    to: "June 2022",
    position: "Joint Secretary",
    techStack: [
      TechStack.ts,
      TechStack.nextjs,
      TechStack.react,
      TechStack.redux,
      TechStack.graphQL,
      TechStack.redux,
    ],
    link: "https://owasp.co.in/#events",
    img: ["/p2.png"],
  },
];
let i = 0;
export default () => {
  const timelineList = document.getElementById("timelineList");

  timeline.forEach((item, index) => {
    const liEle = document.createElement("li");

    liEle.className = "my-20 ml-4 relative";
    liEle.innerHTML = `
    <div
    class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-[22px] border border-white dark:border-gray-900 dark:bg-gray-700"
  ></div>
  <div
  class="lg:absolute rounded-md mb-5 max-w-[350px] max-h-[350px] -left-[390px] top-[20px]"
>
<div class="   lg:relative lg:w-[350px] lg:h-[350px]">
  <img  id="${index}"   class="${
      item.img.length > 1 ? "animate-fade" : ""
    } projectImage rounded-md lg:absolute lg:right-0" src="${
      item.img[i % item.img.length]
    }" />
</div>
</div>
<div>
      <div class="text-5xl my-5 font-semibold text-[#A0EBCF]">
        ${item.title}
      </div>
      <div
        class="text-3xl my-5 font-normal leading-none text-gray-50 "
      >
        ${item.position}
      </div>
      <div
        class="mb-1 text-xl font-semibold leading-none text-gray-500"
      >
      ${item.from} - ${item.to}
      </div>

      <ul class="list-disc px-5 my-5">
      ${item.bulletPoints.reduce((prev, point) => {
        return (
          prev +
          `

          <li class="mb-4 text-base font-normal text-gray-400">
         
          ${point}

          </li>
          
          `
        );
      }, "")}
        </ul>
       ${
         item.link
           ? `
           <div class="w-[40px]">
           
           <a href="${item.link}" target="_blank">
           <img class="pl-3 h-6" src="/icons/link.svg" />
           </a>
           </div>
           `
           : ""
       }

        <div class="my-4 flex">
        ${item.techStack.reduce((prev, ele) => {
          return (
            prev +
            `
  
            <div class="p-2 flex gap-2 items-center transition-all m-2">
            <img src="/icons/js.svg" class="w-5 h-5" />
            <h1 class="text-gray-400">${ele}</h1>
  
            </div>
            
            `
          );
        }, "")}
        </div>
       </div>
        `;

    timelineList?.appendChild(liEle);
  });

  setTimeout(() => {
    changeImage();
    setInterval(() => {
      changeImage();
    }, 5000);
  }, 2500);
};

const changeImage = () => {
  i += 1;
  document
    .querySelectorAll<HTMLImageElement>(".projectImage")
    .forEach((item) => {
      const index = Number(item.getAttribute("id"));

      item.setAttribute(
        "src",
        timeline[index].img[i % timeline[index].img.length]
      );
    });
};
