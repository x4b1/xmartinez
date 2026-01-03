export type Education = {
  title: string;
  place: string;
  startDate: string;
  endDate: string;
};

export type Experience = {
  company: string;
  url: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string[];
  tags: string[];
};

export type Project = {
  title: string;
  description: string;
  link: string;
};

export type Labels = {
  location: string;
  email: string;
  linkedin: string;
  github: string;
  website: string;
  education: string;
  languages: string;
  workExperience: string;
  projects: string;
  moreExperienceAt: string;
  about: string;
  personalInformation: string;
};

export type SEO = {
  defaultDescription: string;
  keywords: string;
  author: string;
  themeColor: string;
};

export type UI = {
  downloadCV: string;
  downloadIcon: string;
};

export type CVInfo = {
  name: string;
  jobDescription: string;
  location: string;
  website: string;
  email: string;
  github: string;
  linkedin: string;
  about: string[];
  languages: string[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  labels: Labels;
  seo: SEO;
  ui: UI;
};
