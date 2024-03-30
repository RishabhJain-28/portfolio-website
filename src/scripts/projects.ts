import { Project, TechStack } from "../types";

export const projects: Project[] = [
  {
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
