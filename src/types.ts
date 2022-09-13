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
}

export const teckstackItemImage: Record<keyof typeof TechStack, string> = {
  React: "/icons/react.svg",
  JavaScript: "/icons/js.svg",
  TypeScript: "/icons/typescript.svg",
  NextJs: "/icons/nextjs.svg",
  Redux: "/icons/redux.svg",
  GraphQL: "/icons/graphql.svg",
  // ts: "/icons/js.svg",
  MongoDB: "/icons/mongodb.svg",
  NodeJS: "/icons/nodejs.svg",
  Tailwind: "/icons/tailwindcss.svg",
  Express: "/icons/express.svg",
  Postgresql: "/icons/postgresql.svg",
};
