import { Pagination } from "antd";
import { useState } from "react";
import { Cards } from "../Cards/cards";
const AppPagination = ({ links }) => {
  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    setCurrent(page);
  };
  return (
    <>
      <Pagination
        current={current}
        onChange={onChange}
        total={links.total}
        showSizeChanger={false}
      />
      <Cards current={current} />
    </>
  );
};
export default AppPagination;
