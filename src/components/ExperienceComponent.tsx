import { useAppSelector } from "../store/hooks";
import "../styles/experienceStyles.scss";
import ImgJobKovan from "../static/jobKovan.png";
import ImgJobSkillCrucial from "../static/jobSkillCrucial.png";
import ImgJobArgenta from "../static/jobArgenta.png";

const experienceArray = [
  { place: "freelace", url: null, title: "freelance", work: "design" },
  {
    place: "Kovan start up",
    url: null,
    title: "Kovan start up",
    work: "solve UX problems",
  },
  {
    place: "Kovan start up",
    url: null,
    title: "Kovan start up",
    work: "solve UX problems",
  },
  {
    place: "Kovan start up",
    url: null,
    title: "Kovan start up",
    work: "solve UX problems",
  }
];
const projectImages = [
  {
    src: ImgJobArgenta,
    alt: "argenta",
  },
  {
    src: ImgJobKovan,
    alt: "argenta",
  },
  {
    src: ImgJobSkillCrucial,
    alt: "argenta",
  },
];
const Experience = () => {
  const { route } = useAppSelector((state) => state.route);
  return (
    <div className="experience">
      <div className="left-column">
        {experienceArray.map((it) => {
          return (
            <div className="left-column-projects">
              <div className="projects-title">{it.place}</div>
              <div className="description">{it.work}</div>
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
      </div>
    </div>
  );
};

export default Experience;
