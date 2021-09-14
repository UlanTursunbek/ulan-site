import { IExperience } from "./types";

const CardComponent = (props: IExperience) => {
  return (
      <div className="card">
        <img src={props.src} alt={props.alt} />
        <div className="card-info">
          <h4 className="card-title">{props.title}</h4>
          <span className="card-years">{props.period}</span>
          {props.work.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </div>
      </div>
  );
};

export default CardComponent;
