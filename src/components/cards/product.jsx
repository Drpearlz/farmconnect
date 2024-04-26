import React from "react";
import imgg from "../../assets/images/product.jpg";
import Paragraph from "../text/paragraph";
import Button from "../buttons/button";

export default function ProductCard({ img, price, description, farm }) {
  return (
    <div className="">
      <img
        src={imgg}
        alt=""
        className="h-36 w-[300px] max-md:h-28 object-cover rounded-lg"
      />
      <div className="flex justify-between items-center my-2">
        <Paragraph text="Basket" styles="font-medium max-md:text-xs" />
        <Paragraph
          text="N3000"
          styles="font-semibold text-lg text-green-600 "
        />
      </div>

      {/* tags for product goes here */}
      {/* <div className="grid grid-cols-3 max-md:grid-cols-2 gap-5 mb-4 text-xs">
        <Paragraph
          text="Vegatable"
          styles=" max-md:text-[.6rem] text-xs  p-2 max-md:p-1 text-center bg-green-100 rounded-md   "
        />
        <Paragraph
          text="Vegatable"
          styles=" max-md:text-[.6rem] text-xs  p-2 max-md:p-1 text-center bg-green-100 rounded-md   "
        />
      </div> */}
      {/* location */}
      <div className="flex gap-10 max-md:flex-col max-md:gap-3">
        {/* user profile name */}
        <div className="flex items-center text-green-500 font-medium gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>

          <Paragraph text="Binta Farms" styles="text-xs" />
        </div>
      </div>
      <Button text="Order Now" styles="w-full mt-4 max-md:text-xs" />
    </div>
  );
}
