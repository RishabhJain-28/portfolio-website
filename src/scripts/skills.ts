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
    TechStack.Rust,
    TechStack.Golang,
    TechStack.Python,
    TechStack.Git,
    TechStack.Docker,
  ],
  blockchain: [TechStack.Ethereum, TechStack.Solidity, TechStack.Hardhat],
  cyber: [
    TechStack.Burpsuite,
    TechStack.Postman,
    TechStack["Owasp Top 10"],
    TechStack.Nmap,
    TechStack.Fortify,
  ],
};

export default () => {
  const skillsDiv = document.getElementById("skills");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("inView");
        observer.unobserve(e.target);
      } else {
        e.target.classList.remove("inView");
      }
    });
  });

  Object.values(buckets)
    .reduce((prev, curr) => {
      return [...prev, ...curr];
    }, [])
    .forEach((ts, i) => {
      const div = document.createElement("div");
      div.id = "skill";
      div.style.transitionDelay = `${i * 50}ms`;
      const show = () => {
        const tag = div.getElementsByTagName("h1")[0];
        tag.classList.remove("tab:hidden");

        setTimeout(() => {
          tag.classList.add("tab:hidden");
        }, 2000);
      };
      div.addEventListener("click", show);

      div.className = `tab:cursor-pointer w-17 border-white rounded-full p-2 px-4 flex items-center m-2 text-xl xlscreen:text-3xl gap-3`;

      div.innerHTML = `
        <img src="${teckstackItemImage[ts]}" class=" lg:w-10 w-7 ">
        <h1 class=" tab:hidden">${ts}</h1>
        `;
      skillsDiv?.appendChild(div);
      observer.observe(div);
    });
};
