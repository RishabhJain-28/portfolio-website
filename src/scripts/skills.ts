import { TechStack, teckstackItemImage } from "../types";

const buckets = {
  dev: [
    TechStack.JavaScript,
    TechStack.TypeScript,
    TechStack.React,
    TechStack.Redux,
    TechStack.Tailwind,
    TechStack.NextJs,
    TechStack.GraphQL,
    TechStack.Express,
    TechStack.NodeJS,
    TechStack.MongoDB,
    TechStack.Postgresql,
  ],
  misc: [TechStack["C++"], TechStack.Golang, , TechStack.Python, TechStack.Git],
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

      div.className =
        " p-2  text-lg lg:text-3xl flex  items-center m-2 lg:mr-10  gap-3";

      div.innerHTML = `

        <img src="${teckstackItemImage[ts]}" class=" w-8 ">
        <h1 class=""> ${ts} </h1>
        `;

      skillsDiv?.appendChild(div);
    });
};

// export default () => {
//   const skillsDiv = document.getElementById("skills");
//   const a = Object.values(buckets);
//   a.forEach((b) => {
//     const bucketDiv = document.createElement("div");

//     bucketDiv.className = `flex flex-col flex-wrap p-2 m-2`;
//     bucketDiv.style.width = `${Math.floor(100 / a.length)}%`;

//     b.forEach((ts) => {
//       const div = document.createElement("div");
//       div.className = " flex justify-center items-center m-2 p-2 gap-2";

//       div.innerHTML = `
//             <img src="${teckstackItemImage[ts]}" class=" w-8 ">
//             <h1 class=""> ${ts} </h1>
//         `;
//       bucketDiv.appendChild(div);
//     });
//     skillsDiv!.appendChild(bucketDiv);
//   });

//   Object.values(TechStack).forEach((ts) => {
//     div.innerHTML = `
//         <div class="flex justify-center items-center">
//             <img src= "${teckstackItemImage[ts]}" class=" w-8 ">
//             <h1 class=""> ${ts} </h1>
//         </div>
//         `;

//     skillsDiv?.appendChild(div);
//   });
// };
