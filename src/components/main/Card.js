import data from "../../helper/data";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      {data.map((item) => (
        <div className="card">
          <div className="card-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="card-title">
            <h2>{item.title}</h2>
          </div>
          <div className="card-desc">
            <p>{item.desc}</p>
          </div>
          <div className="card-date">
            <h3>{item.date}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
