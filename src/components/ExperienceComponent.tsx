import { experienceArray } from "../constants";
import { useAppSelector } from "../store/hooks";
import "../styles/experienceStyles.scss";

import CardComponent from "./Card";
import { BounceInRightDiv } from "./StyledAnimations";
import { IExperience } from "./types";

{
  /* http://www.zavod-rekom.kz/ */
}

const Experience = () => {
  const { route } = useAppSelector((state) => state.route);
  return (
    <div className="experience">
      {experienceArray.map((it, index) => {
        return (
          <BounceInRightDiv delay={`${index + 1}s`}>
            <CardComponent
              title={it.title}
              work={it.work}
              period={it.period}
              src={it.src}
              alt={it.alt}
            />
          </BounceInRightDiv>
        );
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
