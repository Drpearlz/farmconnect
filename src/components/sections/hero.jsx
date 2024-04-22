import React from "react";
import Heading from "../text/heading";
import Paragraph from "../text/paragraph";
import Button from "../buttons/button";
import hero from "../../assets/images/hero.png";

export default function Hero() {
  return (
    <div class=" p-10 pt-36 h-full max-md:flex-col max-md:p-5 max-md:pt-40  flex items-center justify-center w-full ">
      <div class="w-1/2 max-md:w-full max-md:text-center">
        <Heading
          text={"FarmConnect - Your Bridge to Fresh, Locally Sourced Produce"}
          styles={"mb-10 max-md:w-full"}
        />
        <Paragraph text="At FarmConnect,  we believe that everyone deserves access to fresh, farm-to-fork produce. We are here to connect you directly with farmers in your area, ensuring that you receive the highest quality products while supporting local agriculture. " />

        <Button text="Get Started Now" styles="mt-5"/>

        <div class="my-10 max-md:border-none max-md:p-0  flex flex-col gap-3 text-xs   w-2/3 max-sm:w-full  p-3 border-black border-[1px] max-md:items-center rounded-md">
          <input
            type="text"
            class="w-full p-4 rounded-xl bg-transparent focus:outline-none border-[1px] border-black placeholder:text-black max-md:placeholder:text-center"
            placeholder="Sign up to our newsletter"
            
          />
          <Button styles="text-xs w-1/3" text="Suscribe Now" primary={false} />
        </div>
      </div>
      <img src={hero} alt="" class='h-full w-1/2 max-md:h-[] max-md:w-full object-contain' />
    </div>
  );
}
