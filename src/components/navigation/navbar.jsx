import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import Paragraph from "../text/paragraph";
import Button from "../buttons/button";

export default function NavBar() {
  let [showMobile, setShowmobile] = useState(false);
  return (
    <div class="w-full absolute py-5 max-md:px-5 px-10 flex items-center text-sm justify-between border-b-[1px] border-black top-0">
      {/* logo area */}
      <img src={logo} alt="" class="w-28" />

      {/* nav items */}

      <ul class="flex gap-10 max-md:hidden">
        <a href="">Home</a>
        <a href="">How it Works</a>
        <a href="">Service Area</a>
        <a href="">Information Center</a>
        <a href="">Product</a>
      </ul>

      {/* auth items */}
      <ul class="flex items-center gap-10 text-base max-md:hidden">
        <a href="/login">
          <Paragraph text="Login" styles="text-base" />
        </a>
        <a href="/signup">
          <Button text="Register" styles="text-base" />
        </a>
      </ul>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 cursor-pointer md:hidden"
        onClick={() => {
          setShowmobile(!showMobile);
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      {/* mobile Nav */}

      {showMobile && (
        <div class="h-screen md:hidden w-screen bg-primary gap-16 fixed left-0 top-0 text-white flex flex-col p-5 text-sm ">
          {/* logo area */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 self-end "
            onClick={() => {
              setShowmobile(!showMobile);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>

          <img
            src={logo}
            alt=""
            class="w-28 text-white   bg-white p-5 rounded-md"
          />

          {/* nav items */}

          <ul class="flex flex-col gap-5 ">
            <a href="">Home</a>
            <a href="">How it Works</a>
            <a href="">Service Area</a>
            <a href="">Information Center</a>
            <a href="">Product</a>
          </ul>

          {/* auth items */}
          <ul class="flex flex-col  gap-5 text-base ">
            <a href="/login">
              <Paragraph text="Login" styles="text-base" />
            </a>
            <a href="/signup">
              <Button
                text="Register"
                styles="text-base w-full "
                primary={false}
              />
            </a>
          </ul>
        </div>
      )}
    </div>
  );
}
