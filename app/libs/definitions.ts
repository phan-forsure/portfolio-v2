type Project = {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl: string;
  liveUrl?: string;
};

type CommandItemType = {
  name: string;
  path: string;
};