import {
  IExperience,
  ITools,
  IColorsPallete,
  ILinks,
} from "../components/types";
import ImgJobKovan from "../static/imagesPNG/jobKovan.png";
import ImgJobSkillCrucial from "../static/imagesPNG/jobSkillCrucial.png";
import ImgJobArgenta from "../static/imagesPNG/jobArgenta.png";
import ImgJobRekom from "../static/imagesPNG/jobRekom.png";
import logoReact from "../static/logos/logoReact.svg";
import logoCSS from "../static/logos/logoCSS.svg";
import logoGIT from "../static/logos/logoGIT.svg";
import logoHTML5 from "../static/logos/logoHTML5.svg";
import logoJest from "../static/logos/logoJest.svg";
import logoJS from "../static/logos/logoJS.svg";
import logoMobx from "../static/logos/logoMobx.svg";
import logoNPM from "../static/logos/logoNPM.svg";
import logoRedux from "../static/logos/logoRedux.svg";
import logoSASS from "../static/logos/logoSASS.svg";
import logoTypescript from "../static/logos/logoTypescript.svg";
import logoNode from "../static/logos/logoNode.svg";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

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
      "manage states of components with Redux-Saga \n and Mobx",
      "redesigned UI elements using SASS according to Figma",
    ],
    period: "May 2021 - current",
    src: ImgJobArgenta,
    alt: "argenta",
    url: "https://argenta.dev/",
  },
  {
    title: "Kovan studio",
    work: [
      "Profiling, Troubleshooting & Bugs fixes that helped \nto tune system performance and decrease average \nresponse time",
      "Refactoring class components to hooks for better \ncode",
      "Redesigned authorization pages",
    ],
    period: "February 2021 - April 2021",
    src: ImgJobKovan,
    alt: "kovan",
    url: "https://kovan.studio/",
  },
  {
    title: "SkillCrucial",
    work: [
      "Cooperate with programmers to create clean \nresponsive interfaces and simple, intuitive experiences",
      "Carried out unit tests to discover errors \nand optimize loading",
      "Improving product aesthetic and UX by using Tailwind.",
    ],
    period: "April 2020 - February 2021",
    src: ImgJobSkillCrucial,
    alt: "skillcrucial",
    url: "https://skillcrucial.com/ru",
  },
  {
    title: "Freelance",
    work: [
      "transfer design from Figma to web by using \nBootstrap 4",
      "integrating with third-party services and external APIs",
    ],
    period: "April 2021 - April 2020",
    src: ImgJobRekom,
    alt: "zavod-rekom",
    url: "http://www.zavod-rekom.kz/",
  },
];

export const toolsArr: ITools[] = [
  {
    title: "CSS",
    src: logoCSS,
    alt: "css logo",
  },
  {
    title: "GIT",
    src: logoGIT,
    alt: "git logo",
  },
  {
    title: "HTML5",
    src: logoHTML5,
    alt: "html logo",
  },
  {
    title: "Jest",
    src: logoJest,
    alt: "jest logo",
  },
  {
    title: "JavaScript (>es6)",
    src: logoJS,
    alt: "js logo",
  },
  {
    title: "Mobx",
    src: logoMobx,
    alt: "mobx logo",
  },
  {
    title: "npm",
    src: logoNPM,
    alt: "npm logo",
  },
  {
    title: "Redux",
    src: logoRedux,
    alt: "redux logo",
  },
  {
    title: "SASS",
    src: logoSASS,
    alt: "sass logo",
  },
  {
    title: "Typescript",
    src: logoTypescript,
    alt: "typescript logo",
  },
  {
    title: "React",
    src: logoReact,
    alt: "react logo",
  },
  {
    title: "NodeJS",
    src: logoNode,
    alt: "node logo",
  },
];

export const colorsPallete: IColorsPallete = {
  spaceCadet: "#2B2D42",
  manatee: "#8D99AE",
  aliceBlue: "#EDF2F4",
  imperialRed: "#EF233C",
  amanarathRed: "#D90429",
  slateGray: "#647890",
};

export const lightTheme = {
  backgroundLogo: colorsPallete.manatee,
  backgroundNav: colorsPallete.spaceCadet,
  hoverBackground: colorsPallete.imperialRed,
  backgroundMain: colorsPallete.aliceBlue,
  colorMain: colorsPallete.spaceCadet,
  colorLogo: colorsPallete.aliceBlue,
  colorText: colorsPallete.aliceBlue,
  hoverColor: colorsPallete.aliceBlue,
};
export const darkTheme = {
  backgroundLogo: colorsPallete.amanarathRed,
  colorLogo: colorsPallete.aliceBlue,
  backgroundNav: colorsPallete.slateGray,
  backgroundMain: colorsPallete.spaceCadet,
  colorMain: colorsPallete.aliceBlue,
  colorText: colorsPallete.spaceCadet,
  hoverBackground: colorsPallete.imperialRed,
  hoverColor: colorsPallete.aliceBlue,
};

export const navLinks = ["experience", "tools", "contacts"];

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

export const contactLinks: ILinks[] = [
  {
    url: "https://wa.me/+77718649090?text=Hi! I'm writing you from your site",
    notificationText: "click to write message via whatsapp",
    linkText: "+7 771 864 90 90",
    icon: FaWhatsapp,
  },
  {
    url: "https://telegram.me/ruganga?text=Hi! I'm writing you from your site",
    notificationText: "click to write message in telegram",
    linkText: "+7 771 864 90 90 | @ruganga",
    icon: FaTelegramPlane,
  },
  {
    url: "mailto:ulantursunbekdev@gmail.com",
    notificationText: "click to write an email",
    linkText: "ulantursunbekdev@gmail.com",
    icon: FaEnvelope,
  },
  {
    url: "https://www.linkedin.com/in/ulantursunbekuulu/",
    notificationText: "click to connect with me in Linkedin",
    linkText: "https://www.linkedin.com/in/ulantursunbekuulu",
    icon: FaLinkedinIn,
  },
  {
    url: "https://github.com/UlanTursunbek",
    notificationText: "click to see my latest projects code",
    linkText: "https://github.com/UlanTursunbek",
    icon: FaGithub,
  },
];
