import React from "react";
import Heading from "../text/heading";
import Paragraph from "../text/paragraph";
import Button from "../buttons/button";
import her from "../../assets/images/her.png";

export default function Hero() {
  return (
    <div className=" p-10 pt-36 mb-10 h-full max-md:flex-col max-md:p-5 max-md:pt-40 bg-white flex items-center justify-center w-full ">
      <div className="w-1/2 max-md:w-full max-md:text-center">
        <Heading
          text={"FarmConnect - Your Bridge to Fresh, Locally Sourced Produce"}
          styles={"mb-10 max-md:w-full"}
        />
        <Paragraph text="At FarmConnect,  we believe that everyone deserves access to fresh, farm-to-table produce. We are here to connect you directly with farmers in your area, ensuring that you receive the highest quality products while supporting local agriculture. " />

        <Button text="Get Started Now" styles="my-10"/>

        {/* <div className="my-10 max-md:border-none max-md:p-0  flex flex-col gap-3 text-xs   w-2/3 max-sm:w-full  p-3 border-black border-[1px] max-md:items-center rounded-md">
          <input
            type="text"
            className="w-full p-4 rounded-xl bg-transparent focus:outline-none border-[1px] border-black placeholder:text-black max-md:placeholder:text-center"
            placeholder="Sign up to our newsletter"
            
          />
          <Button styles="text-xs w-1/3" text="Suscribe Now" primary={false} />
        </div> */}
      </div>
      <img src={her} alt="" className='h-full w-1/2 max-md:h-[] max-md:w-full object-contain' />
    </div>
  );
}
