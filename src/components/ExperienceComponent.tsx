import { useAppSelector } from "../store/hooks";
import "../styles/experienceStyles.scss";
import ImgJobKovan from "../static/jobKovan.png";
import ImgJobSkillCrucial from "../static/jobSkillCrucial.png";
import ImgJobArgenta from "../static/jobArgenta.png";
import ImgJobRekom from "../static/jobRekom.png";
import CardComponent from "./Card";
import { IExperience } from "./types";

const experienceArray: IExperience[] = [
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
// const projectImages = [
//   {
//     src: ImgJobArgenta,
//     alt: "argenta",
//   },
//   {
//     src: ImgJobKovan,
//     alt: "argenta",
//   },
//   {
//     src: ImgJobSkillCrucial,
//     alt: "argenta",
//   },
//   {
//     src: ImgJobRekom,
//     alt: "argenta",
//   },
// ];
      {
        /* http://www.zavod-rekom.kz/ */
      }

const Experience = () => {
  const { route } = useAppSelector((state) => state.route);
  return (
    <div className="experience">
      {experienceArray.map((it) => {
        return <CardComponent
          title={it.title}
          work={it.work}
          period={it.period}
          src={it.src}
          alt={it.alt}
        />;
      })}
      {/* <div className="left-column">
        {experienceArray.map((it) => {
          return (
            <div className="left-column-projects">
              <div className="projects-title">{it.title}</div>
              <ul className="description">
                {it.work.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="right-column">
        {projectImages.map((it) => {
          return (
            <div className="right-column-projects">
              <div>
                <img src={it.src} alt={it.alt} />
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Experience;
