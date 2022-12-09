import { TechStack, teckstackItemImage } from "../types";

const buckets = {
  dev: [
    TechStack.JavaScript,
    TechStack.TypeScript,
    TechStack.React,
    TechStack.Redux,
    TechStack.HTML,
    TechStack.CSS,
    TechStack.Tailwind,
    TechStack.NextJs,
    TechStack.Gatsby,
    TechStack.GraphQL,
    TechStack.Express,
    TechStack.NodeJS,
    TechStack.MongoDB,
    TechStack.Postgresql,
  ],
  misc: [
    TechStack["C++"],
    TechStack.Golang,
    TechStack.Python,
    TechStack.Git,
    TechStack.Docker,
  ],
  blockchain: [TechStack.Ethereum, TechStack.Solidity, TechStack.Hardhat],
};

export default () => {
  const skillsDiv = document.getElementById("skills");

  Object.values(buckets)
    .reduce((prev, curr) => {
      return [...prev, ...curr];
    }, [])
    .forEach((ts) => {
      const div = document.createElement("div");
      const show = () => {
        const tag = div.getElementsByTagName("h1")[0];
        tag.className = "block";

        setTimeout(() => {
          tag.className = "tab:hidden";
        }, 2000);
      };
      div.addEventListener("click", show);

      div.className = `cursor-pointer w-17 border-white rounded-full p-2 px-4 flex items-center m-2 text-xl xlscreen:text-3xl gap-3`;

      div.innerHTML = `
        <img src="${teckstackItemImage[ts]}" class=" lg:w-8 w-7 ">
        <h1 class="tab:hidden">${ts}</h1>
        `;

      skillsDiv?.appendChild(div);
    });
};
