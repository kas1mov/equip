import { NavLink, useLocation, useSearchParams } from "react-router-dom";
// import { dataFilterTitle } from "../../utils/data";
import { useEffect, useState } from "react";

export const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchParams.set("keyword", event.target.value);
      setSearchParams(searchParams);
    }
  };

  const location = useLocation();
  console.log(location);

  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://api.adew.uz/api/categories")
      .then((res) => res.json())
      .then((json) => setCategory(json));
  }, []);
  console.log(category);

  const handlyClick = (value) => {
    // console.log(value);
  };
  return (
    <div className="filter">
      <div className="filter__search">
        <input
          type="text"
          placeholder="Search"
          className="filter__search__input"
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="filter__menu">
        {category.map((item) => (
          <NavLink
            className="filter__menu__item"
            key={item.id}
            onClick={handlyClick}
          >
            {item.name.uz}
          </NavLink>
        ))}
        <button className="filter__menu__btn">more</button>
      </div>
    </div>
  );
};
