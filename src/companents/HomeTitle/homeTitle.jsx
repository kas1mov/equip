import { NavLink } from "react-router-dom";
import { dataTelNum } from "../../utils/data";

export const Title = () => {
  return (
    <div className="title">
      <h1 className="home__title__text">
        Create ,Manage <br /> & Boost Your <br /> Business online store
      </h1>
      <div className="home__title__tel">
        {dataTelNum.map((item) => (
          <NavLink className="home__title__btn" to={item.num}>
            Bog'lanish
          </NavLink>
        ))}
      </div>
    </div>
  );
};
