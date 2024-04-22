import React from 'react'
import imgg from '../../assets/images/product.jpg'
import Paragraph from '../text/paragraph'
import Button from '../buttons/button';

export default function ProductCard({img,price,description,farm}) {
  return (
    <div class="">
      <img
        src={imgg}
        alt=""
        class="h-36 w-[300px] max-md:h-28 object-cover rounded-lg"
      />
      <div class="flex justify-between items-center my-2">
        <Paragraph text="Basket" styles="font-medium max-md:text-xs" />
        <Paragraph
          text="N3000"
          styles="font-semibold text-lg text-green-600   "
        />
      </div>
 
      {/* tags for product goes here */}
      <div class='grid grid-cols-3 max-md:grid-cols-2 gap-5 my-2 text-xs'>
        <Paragraph
          text="Vegatable"
          styles=" max-md:text-[.6rem] text-xs  p-2 max-md:p-1 text-center bg-green-100 rounded-md   "
        />
        <Paragraph
          text="Vegatable"
          styles=" max-md:text-[.6rem] text-xs  p-2 max-md:p-1 text-center bg-green-100 rounded-md   "
        />

      </div>
      <Button text='Order Now' styles='w-full mt-2'/>
    </div>
  );
}
