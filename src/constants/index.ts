import { IExperience, ITools } from "../components/types";
import LogoReact from "../static/logos/LogoReact.svg";
import LogoHTML5 from "../static/logos/LogoHTML5.svg";
import ImgJobKovan from "../static/jobKovan.png";
import ImgJobSkillCrucial from "../static/jobSkillCrucial.png";
import ImgJobArgenta from "../static/jobArgenta.png";
import ImgJobRekom from "../static/jobRekom.png";

export const routes = {
  ABOUT: "ABOUT",
  EXPERIENCE: "EXPERIENCE",
  TOOLS: "TOOLS",
  CONTACTS: "CONTACTS",
};

export const experienceArray: IExperience[] = [
  {
    title: "Argenta",
    work: [
      "visualize data from back end using amchart 4",
      "manage states of components with Redux-Saga and Mobx",
      "redesigned UI elements using SASS according to Figma",
    ],
    period: "April 2021 - current",
    src: ImgJobArgenta,
    alt: "argenta",
  },
  {
    title: "Kovan studio",
    work: [
      "Profiling, Troubleshooting & Bugs fixes that helped to tune system performance and decrease average response time",
      "Refactoring class components to hooks for better code",
      "Redesigned authorization pages",
    ],
    period: "April 2021 - current",
    src: ImgJobKovan,
    alt: "argenta",
  },
  {
    title: "SkillCrucial",
    work: [
      "Cooperate with programmers to create clean responsive interfaces and simple, intuitive experiences",
      "Carried out unit tests to discover errors and optimize loading",
      "Improving product aesthetic and UX by using Tailwind.",
    ],
    period: "April 2021 - current",
    src: ImgJobSkillCrucial,
    alt: "argenta",
  },
  {
    title: "Freelance",
    work: [
      "transfer design from Figma to web by using Bootstrap 4",
      "integrating with third-party services and external APIs",
    ],
    period: "April 2021 - February 2021",
    src: ImgJobRekom,
    alt: "argenta",
  },
];

export const toolsArr: ITools[] = [
  {
    title: "React",
    src: LogoReact,
    alt: "React logo",
  },
  {
    title: "HTML5",
    src: LogoHTML5,
    alt: "html logo",
  },
  {
    title: "React",
    src: LogoReact,
    alt: "React logo",
  },
  {
    title: "React",
    src: LogoReact,
    alt: "React logo",
  },
  {
    title: "React",
    src: LogoReact,
    alt: "React logo",
  },
  {
    title: "React",
    src: LogoReact,
    alt: "React logo",
  },
  {
    title: "React",
    src: LogoReact,
    alt: "React logo",
  },
  {
    title: "React",
    src: LogoReact,
    alt: "React logo",
  },
  {
    title: "React",
    src: LogoReact,
    alt: "React logo",
  },
  {
    title: "React",
    src: LogoReact,
    alt: "React logo",
  },
];