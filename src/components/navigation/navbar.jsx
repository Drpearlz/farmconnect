import React from "react";
import logo from "../../assets/images/logo.svg";
import Paragraph from "../text/paragraph";
import Button from "../buttons/button";

export default function NavBar() {
  return (
    <div class="w-full absolute py-5 px-10 flex items-center text-sm justify-between border-b-[1px] border-black top-0">
      {/* logo area */}
      <img src={logo} alt="" class='w-28' />

      {/* nav items */}

      <ul class='flex gap-10 max-md:hidden'>
        <a href="">Home</a>
        <a href="">How it Works</a>
        <a href="">Service Area</a>
        <a href="">Information Center</a>
        <a href="">Product</a>
      </ul>

      {/* auth items */}
        <ul class='flex items-center gap-10 text-base'>
            <Paragraph text="Login" styles="text-base"/>
            <Button text="Register" styles="text-base"/>
        </ul>
    </div>
  );
}
