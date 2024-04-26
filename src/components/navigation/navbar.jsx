import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import Paragraph from "../text/paragraph";
import Button from "../buttons/button";

export default function NavBar() {
  let [showMobile, setShowmobile] = useState(false);
  return (
    <div className="w-full absolute py-5 max-md:px-5 px-10 flex items-center text-sm justify-between border-b-[1px] border-black top-0">
      {/* logo area */}
      <img src={logo} alt="" className="w-28" />

      {/* nav items */}

      <ul className="flex gap-10 max-md:hidden">
        <a href="/">Home</a>
        <a href="/pending">How it Works</a>
        <a href="/pending">Service Area</a>
        <a href="/pending">Information Center</a>
        <a href="/products">Product</a>
      </ul>

      {/* auth items */}
      <ul className="flex items-center gap-10 text-base max-md:hidden">
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
        <div className="h-screen md:hidden w-screen z-50 bg-primary gap-16 fixed left-0 top-0 text-white flex flex-col p-5 text-sm ">
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
            className="w-28 text-white   bg-white p-5 rounded-md"
          />

          {/* nav items */}

          <ul className="flex flex-col gap-5 ">
            <a href="/">Home</a>
            <a href="/pending">How it Works</a>
            <a href="/pending">Service Area</a>
            <a href="/pending">Information Center</a>
            <a href="/products">Product</a>
          </ul>

          {/* auth items */}
          <ul className="flex flex-col   gap-5 text-lg ">
            <a href="/login">
              <Paragraph
                text="Login "
                styles="text-lg text-center text-green-100"
              />
            </a>
            <a href="/signup">
              <Button
                text="Register"
                styles="text-lg w-full "
                primary={false}
              />
            </a>
          </ul>
        </div>
      )}
    </div>
  );
}
