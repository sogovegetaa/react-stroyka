import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, img }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        img: img,
      },
    });
  };

  return (
    <>
      <div>
        <div
          className={`border-[1px] border-[#ebebeb] pt-[18px] px-[18px]  hover:border-[#ffd333] relative`}
        >
          <img src={img} width={228} height={228} className="mx-auto  " />
          <p className="text-[#3d464d] text-lg leading-[19px] pt-2">{title}</p>
          <p className="text-center text-[#b3b3b3] text-sm">14 Reviews</p>
          <p className=" font-bold text-xl">${price}</p>

          <button
            onClick={addToBasket}
            className={` mb-[20px] text-[.875rem] leading-[1.25] font-medium border-[#ffd333] bg-[#ffd333] color-[#3d464d] py-[0.375rem] px-4   duration-300`}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
