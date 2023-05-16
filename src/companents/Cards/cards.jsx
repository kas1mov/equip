import { dataCards } from "../../utils/data";
import { AppPagination } from "../Pagination/pagination";
import { Link } from "react-router-dom";

export const Cards = () => {
  return (
    <div className="Cards">
      <div className="cards">
        {dataCards.map((item) => (
          <div className="card" key={item.id}>
            <div className="card__img">
              <img src={item.img} alt="" />
            </div>
            <div className="card__text">
              <h2 className="card__title">{item.title}</h2>
              <p className="card__sum">{item.sum}</p>
              <Link className="card__btn" to={"/buy"}>
                View more
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="card__pagination">
        <AppPagination />
      </div>
    </div>
  );
};
