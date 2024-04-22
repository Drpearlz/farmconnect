import React from "react";
import Paragraph from "../text/paragraph";
import img from "../../assets/images/intro.png";
import img2 from "../../assets/images/intro2.png";
import Heading from "../text/heading";
import farmer from "../../assets/images/farmer.jpg";
import Button from "../buttons/button";

export default function Intro() {
  return (

    <div class="w-full bg-white">
      <div class="p-10 flex  bg-white w-4/5 max-md:w-full mx-auto max-md:text-center max-md:gap-10 max-md:p-5 items-center justify-center max-md:flex-col  gap-20">
        <img src={img} alt="" class="max-md:h-96 h-[600px]  object-contain" />
        <div>
          <Heading
            text={"Fresh Food Products, Direct Delivery "}
            styles={"mb-6 text-4xl"}
          />
          <Paragraph
            text="Fresh from farm to table, the true essence of nature
 Thinking of a quick and fast route to Fresh-farm produce? Think FarmConnect!"
          />
        </div>
      </div>

      <div class="p-10 flex flex-row-reverse w-4/5 max-md:w-full mx-auto  bg-white max-md:text-center max-md:gap-10 max-md:p-5 items-center justify-center max-md:flex-col  gap-20">
        <img src={img2} alt="" class="max-md:h-96 h-[600px]  object-contain" />
        <div>
          <Heading
            text={"Everyone Should Access Healthy Farm Products"}
            styles={"mb-6 text-4xl"}
          />
          <Paragraph text="Fresh healthy food fuels vitality, strengthens immunity, and nurtures a balanced mind-body connection, that's what we offer you-FarmConnect" />
        </div>
      </div>

      <div class="py-20 px-10 flex flex-row-reverse  w-full max-md:w-full mx-auto bg-primary  text-white rounded-t-3xl max-md:gap-10 max-md:p-5 items-center justify-center max-md:flex-col  gap-20 ">
        <img
          src={farmer}
          alt=""
          class="max-md:h-56 h-[400px] rounded-2xl object-contain"

        />
        <div class="mx-auto">
          <Heading
            text={"Connect Easily With Local Consumers"}
            styles={"mb-6 text-4xl  font-normal text-secondary"}
          />
          <Paragraph
            text="Deliver your products at the door steps of your customers, our delivery logistic partners are dedicated to swiftly delivering anywhere in Nigeria"
            styles=""
          />
          <Button text="Create your account" primary={false} styles="mt-5" />
        </div>
      </div>
    </div>
  );
}
