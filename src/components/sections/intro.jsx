import React from 'react'
import Paragraph from '../text/paragraph'
import img from '../../assets/images/intro.png'

export default function Intro() {
  return (
    <div class="p-10 flex w-full bg-white max-md:text-center max-md:gap-10 max-md:p-5 items-center justify-center max-md:flex-col  gap-20">
        <img src={img} alt="" class='max-md:h-96' />
      <Paragraph styles='text-lg  max-md:w-full' text="At FarmConnect,  Dive into a World of Flavor and Nutrients Straight from the Earth to Your Plate. Savor the Difference of Locally Sourced, Organic Delights Bursting with Vibrancy and Taste. From Crisp, Colorful Vegetables to Juicy, Sun-Ripened Fruits, Every Bite Tells a Story of Sustainable Agriculture and Unmatched Quality. Join Us in Nourishing Your Body and Supporting Local Farmers. Taste the Difference, Taste the Freshness – Your Culinary Adventure Starts Here!" />
    </div>
  );
}
