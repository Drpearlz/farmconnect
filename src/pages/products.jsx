import React from 'react'
import ProductCard from '../components/cards/product'
import NavBar from '../components/navigation/navbar'

export default function Products() {
  return (
    <div>
        {/* filter options */}
      <NavBar />
      <div class="pt-36 grid grid-cols-4 max-md:grid-cols-2 px-10 max-md:px-5 gap-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <ProductCard />
        ))}
      </div>
    </div>
  );
}
