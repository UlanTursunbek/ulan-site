import { IconType } from "react-icons";

export interface IExperience {
  title: string;
  work: string[];
  period: string;
  src: string;
  alt: string;
  url: string;
}

export interface ITools {
  title: string;
  src: string;
  alt: string;
  delay?: string;
}

export interface IColorsPallete {
  spaceCadet: string;
  manatee: string;
  aliceBlue: string;
  imperialRed: string;
  amanarathRed: string;
  slateGray: string;
}

export interface ILinks {
  url: string;
  notificationText: string;
  linkText: string;
  icon: IconType;
}

