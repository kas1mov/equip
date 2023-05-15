import { NavLink } from "react-router-dom";
import { dataFilterTitle } from "../../utils/data";

export const Filter = () => {
  return (
    <div className="filter">
      <div className="filter__search">
        <input
          type="text"
          placeholder="Search"
          className="filter__search__input"
        />
      </div>
      <div className="filter__menu">
        {dataFilterTitle.map((item) => (
          <NavLink className="filter__menu__item" key={item.id}>
            {item.title}
          </NavLink>
        ))}
        <button className="filter__menu__btn">more</button>
      </div>
    </div>
  );
};
