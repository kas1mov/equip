import { BackIcon } from "../assets/icon/icon";
import MaskImg from "../assets/image/Mask Group (1).png";

export const Buy = () => {
  return (
    <div className="buy">
      <img src={MaskImg} alt="" className="buy__mask"/>
      <div className="buy__container">
        <button className="buy__back">
          {" "}
          <BackIcon /> Back
        </button>
      </div>
    </div>
  );
};
