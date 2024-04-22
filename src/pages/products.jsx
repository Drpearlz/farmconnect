import React from 'react'
import ProductCard from '../components/cards/product'
import NavBar from '../components/navigation/navbar'
import ProductFillter from '../components/sorting/productFillter';
import Heading from '../components/text/heading';

export default function Products() {
  return (
    <div>
      {/* filter options */}

      <NavBar />
      <div className="py-28 flex flex-col px-10 max-md:px-5 gap-5">
        <Heading text={"Our Products"} styles={'text-4xl mt-4 max-md:text-center'}/>
        <ProductFillter />
        <div class=" grid grid-cols-4 max-md:grid-cols-2  gap-10">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <ProductCard />
          ))}
        </div>
      </div>
    </div>
  );
}
