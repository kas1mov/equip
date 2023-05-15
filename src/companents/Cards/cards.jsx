import { NavLink } from "react-router-dom";
import { dataCards } from "../../utils/data";
import { AppPagination } from "../Pagination/pagination";

export const Cards = () => {
  return (
    <div className="cards">
      {dataCards.map((item) => (
        <NavLink className="card" key={item.id} to={"/buy"}>
          <div className="card__img">
            <img src={item.img} alt="" />
          </div>
          <div className="card__text">
            <h2 className="card__title">{item.title}</h2>
            <p className="card__sum">{item.sum}</p>
            <button className="card__btn">View more</button>
          </div>
        </NavLink>
      ))}
      <div className="card__pagination">
        <AppPagination />
      </div>
    </div>
  );
};
