import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import Paragraph from '../text/paragraph';
import Button from '../buttons/button';

export default function ProdCard({ img, price, description, farm }) {
  return (
    <div className="">
      <img
        src={img}
        alt=""
        className="h-36 w-[300px] max-md:h-28 object-cover rounded-lg"
      />
      <div className="flex justify-between items-center my-2">
        <Paragraph text="Basket" styles="font-medium max-md:text-xs" />
        <Paragraph text={price} styles="font-semibold text-lg text-green-600" />
      </div>

      {/* Description */}
      <Paragraph text={description} styles="text-xs max-md:text-[.6rem] mb-4" />

      {/* Farm */}
      <div className="flex items-center text-green-500 font-medium gap-2">
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
        <Paragraph text={farm} styles="text-xs" />
      </div>
      <Button text="Order Now" styles="w-full mt-4 max-md:text-xs" />
    </div>
  );
}

// Define PropTypes for type checking
ProdCard.propTypes = {
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  farm: PropTypes.string.isRequired,
};
