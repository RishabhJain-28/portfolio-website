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
  react = "React",
  nextjs = "NextJs",
  graphQL = "GraphQL",
  js = "javascript",
  ts = "typescript",
  redux = "redux",
  restApi = "REST",
  nodejs = "NodeJS",
  tailwind = "Tailwind",
}

export type {};
