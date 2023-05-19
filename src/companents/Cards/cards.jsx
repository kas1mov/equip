import { useEffect, useState } from "react";
// import { dataCards } from "../../utils/data";
import { AppPagination } from "../Pagination/pagination";
import { Link } from "react-router-dom";

export const Cards = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://api.adew.uz/api/products")
      .then((res) => res.json())
      .then((json) => setProduct(json.data));
  }, []);
  console.log(product);
  return (
    <div className="Cards">
      <div className="cards">
        {product.map((item) => (
          <div className="card" key={item.id}>
            <div className="card__img">
              <img src={item.photo} alt="" />
            </div>
            <div className="card__text">
              <h2 className="card__title">{item.name.uz}</h2>
              <p className="card__sum">{item.price}</p>
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
