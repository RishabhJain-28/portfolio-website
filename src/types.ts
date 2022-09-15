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
  HTML = "HTML",
  CSS = "CSS",
  Gatsby = "Gatsby",
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
  Docker = "Docker",
  SocketIO = "SocketIO",
  ThreeJs = "ThreeJs",
  SupabaseDB = "SupabaseDB",
  AntDesign = "AntDesign",
  Bash = "Bash",
  Win32APIs = "Win32APIs",
  Linux = "Linux",
  Electron = "Electron",
  SaltStack = "SaltStack",
  Polygon = "Polygon",
  IPFS = "IPFS",
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
  HTML: "/icons/html.svg",
  CSS: "/icons/css.svg",
  Docker: "/icons/docker.png",
  Gatsby: "/icons/gatsby.svg",
  SocketIO: "/icons/socket-io.svg",
  ThreeJs: "/icons/threejs.svg",
  Bash: "/icons/bash.svg",
  SupabaseDB: "/icons/supabase.svg",
  AntDesign: "/icons/ant-design.svg",
  Electron: "/icons/Electron.svg",
  Win32APIs: "/icons/windows.svg",
  Linux: "/icons/linux.svg",
  SaltStack: "/icons/saltstack.svg",
  Polygon: "/icons/polygon.svg",
  IPFS: "/icons/ipfs.png",
};
