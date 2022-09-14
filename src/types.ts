export type Expirence = {
  title: string;
  from: string;
  to: string;
  position: string;
  bulletPoints: string[];
  techStack: TechStack[];
  link: string;
  img: string[];
};

export type Project = {
  title: string;
  // from: string;
  // to: string;
  description: string;
  bulletPoints: string[];
  techStack: TechStack[];
  link: string;
  img: string[];
  github: string;
};

export enum TechStack {
  React = "React",
  NextJs = "NextJs",
  GraphQL = "GraphQL",
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
  Redux = "Redux",
  Express = "Express",
  NodeJS = "NodeJS",
  Tailwind = "Tailwind",
  MongoDB = "MongoDB",
  Postgresql = "Postgresql",
  "C++" = "C++",
  Golang = "Golang",
  Python = "Python",
  Git = "Git",
  Ethereum = "Ethereum",
  Solidity = "Solidity",
  Hardhat = "Hardhat",
  // p5 = "p5",
  // ThreeJs = "ThreeJs",
  // SocketIO = "SocketIO",
}

export const teckstackItemImage: Record<keyof typeof TechStack, string> = {
  React: "/icons/react.svg",
  JavaScript: "/icons/js.svg",
  TypeScript: "/icons/typescript.svg",
  NextJs: "/icons/nextjs.svg",
  Redux: "/icons/redux.svg",
  GraphQL: "/icons/graphql.svg",
  MongoDB: "/icons/mongodb.svg",
  NodeJS: "/icons/nodejs.svg",
  Tailwind: "/icons/tailwindcss.svg",
  Express: "/icons/express.svg",
  Postgresql: "/icons/postgresql.svg",
  "C++": "/icons/c++.svg",
  Golang: "/icons/golang.svg",
  Python: "/icons/python.svg",
  Ethereum: "/icons/ethereum.svg",
  Solidity: "/icons/solidity.svg",
  Hardhat: "/icons/hardhat.svg",
  Git: "/icons/git.svg",
};
