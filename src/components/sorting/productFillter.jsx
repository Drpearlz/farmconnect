import React, { useState } from "react";
import Paragraph from "../text/paragraph";
import Heading from "../text/heading";

export default function ProductFillter() {
  let [showFilter, SetShowFilter] = useState(false);
  let product_types = [
    "fruit",
    "meat",
    "fish",
    "diary",
    "vegetables",
    "legumes",
  ];

  let location = ["warri", "ogoni"];

  let top_farms = [
    "Top Universe Farms",
    "Hendrix Agric",
    "Fish Merchants ",
    "Every Agro",
    "Food Basket Farms",
    "Tidam Farms"
  ];
  return (
    <div className="self-end">
      {/* filter toggle */}
      <div
        className="flex items-center p-3 bg-green-100 self-end text-green-600 rounded-full cursor-pointer"
        onClick={() => {
          SetShowFilter(!showFilter);
        }}
      >
        <Paragraph text="Filter Items" styles="font-semibold text-green-600" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
          />
        </svg>
      </div>
      {/* filter list */}
      {showFilter && (
        <div className="bg-[rgb(0,0,0,.8)] absolute top-0 p-5 right-0 w-screen flex items-center justify-center h-screen">
          <div className="bg-white relative p-5 rounded-md lg:w-1/2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute top-5 right-5 cursor-pointer"
              onClick={() => {
                SetShowFilter(!showFilter);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>

            <Paragraph
              text={"Filter Items"}
              styles={"text-2xl font-semibold max-md:text-2xl"}
            />
            <Paragraph
              text="Type"
              styles="text-lg font-semibold mt-4 text-gray-400"
            />
            {/* type filter */}
            <div className="flex flex-wrap gap-3 mt-3">
              {product_types.map((item) => (
                <button className="text-xs p-2 rounded-md bg-green-100 focus:bg-primary focus:text-white ">
                  {item}
                </button>
              ))}
            </div>

            <Paragraph
              text="Top Farms"
              styles="text-lg font-semibold mt-4 text-gray-400"
            />
            {/* type filter */}
            <div className="flex flex-wrap gap-3 mt-3">
              {top_farms.map((item) => (
                <button className="text-xs p-2 rounded-md bg-green-100 focus:bg-primary focus:text-white ">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
