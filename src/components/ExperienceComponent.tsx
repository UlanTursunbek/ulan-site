import styled, { keyframes } from "styled-components";
import { device, experienceArray } from "../constants";
import { bounceInRight } from "react-animations";
const bounceInRightAnimation = keyframes`${bounceInRight}`;

const Experience = () => {
  return (
    <ExeperienceContainer>
      {experienceArray.map((it, index) => {
        return (
          <CardsContainer delay={`${index + 1}s`} key={it.title}>
            <CardComponent href={it.url} target="_blank">
              <img src={it.src} alt={it.alt} />
              <div className="card-info">
                <h4 className="card-title">{it.title}</h4>
                <span className="card-years">{it.period}</span>
                {it.work.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </div>
            </CardComponent>
          </CardsContainer>
        );
      })}
    </ExeperienceContainer>
  );
};

export default Experience;

const ExeperienceContainer = styled.div`
  width: 100%;
  height: calc(100vh - 16px);
  /* margin-top: 8px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundMain};
  /* padding: 16px 0; */
`;

interface ICardsContainer {
  delay: string;
}
export const CardsContainer = styled.div<ICardsContainer>`
  width: 100%;
  display: flex;
  justify-content: center;
  animation-duration: ${(props) => props.delay || "1.5s"};
  animation-name: ${bounceInRightAnimation};
`;

const CardComponent = styled.a`
  text-decoration: none;
  width: 360px;
  max-width: 620px;
  width: 100%;
  min-height: 20vh;
  background-color: ${(props) => props.theme.backgroundNav};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  justify-content: flex-start;
  margin-top: 8px;

  &:hover {
    cursor: pointer;
    transform: scale(1.01, 1.01);
    transition-duration: 500ms;
  }
  img {
    position: relative;
    width: 40%;
    height: 100%;
    @media ${device.tablet} {
      width: 0;
    }
  }
  .card-info {
    position: relative;
    width: 60%;
    padding: 16px;
    font-family: "Georama", sans-serif;
    color: ${(props) => props.theme.colorText};

    .card-years {
      font-style: italic;
      font-size: 12px;
    }

    li {
      font-size: 14px;
      margin-top: 8px;
      font-weight: 200;
      margin-top: 4px;
      margin-left: 24px;
      list-style-type: circle;
      white-space: pre;
    }
  }
`;
