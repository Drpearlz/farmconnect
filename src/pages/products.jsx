import React from "react";
import ProductCard from "../components/cards/product";
import NavBar from "../components/navigation/navbar";
import ProductFillter from "../components/sorting/productFillter";
import Heading from "../components/text/heading";

export default function Products() {
  return (
    <div>
      {/* filter options */}

      <NavBar />
      <div className="py-28 flex flex-col px-10 max-md:px-5 gap-5">
        <Heading
          text={"Our Products"}
          styles={"text-4xl mt-4 max-md:text-center"}
        />
        <ProductFillter />
        <div className=" grid grid-cols-4 max-md:grid-cols-2  gap-10">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <ProductCard />
          ))}
        </div>
      </div>
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Get help on WhatsApp"
            href="https://www.wa.link/rhxdcf"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
