import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Cards } from "../Cards/cards";

export const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchCard, setSearchCard] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchParams.set("keyword", event.target.value);
      setSearchParams(searchParams);
    } else if (event.target.value === "") {
      searchParams.delete("keyword", event.target.value);
      setSearchParams(searchParams);
    }
  };

  const { search } = useLocation();
  useEffect(() => {
    const url = new URL("https://api.adew.uz/api/search" + search);

    fetch(url.href)
      .then((res) => res.json())
      .then((json) => setSearchCard(json.data))
      .catch((error) => {
        console.log("API-dan ma'lumotlarni olishda xatolik yuz berdi:", error);
      });
  }, [search]);

  // console.log(searchCard);
  // useEffect(() => {
  //   setSearchCard(url.href);
  // }, [url.href]);
  // console.log(url.href);

  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://api.adew.uz/api/categories")
      .then((res) => res.json())
      .then((json) => setCategory(json));
  }, []);

  const handleClick = (value) => {
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
            onClick={() => handleClick(item)}
          >
            {item.name.uz}
          </NavLink>
        ))}
        <button className="filter__menu__btn">more</button>
      </div>
      <div className="home__cards__title">All</div>
      <Cards searchCard={searchCard} />
    </div>
  );
};
