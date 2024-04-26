import React from "react";
import logo from "../../assets/images/logo-white-no-bg.svg";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import Paragraph from "../text/paragraph";

export default function Footer() {
  return (
    <div className="bg-primary p-3 text-sm max-md:text-xs py-10 lg:p-20 lg:grid  flex flex-wrap justify-center gap-y-10 gap-6 lg:grid-cols-4 lg:gap-20">
      <div>
        <img src={logo} alt="" className="w-48" />
        {/* contact details */}
        <div className="flex text-green-300 text-xl gap-5 lg:mt-10 mt-5 ">
          <MdEmail />
          <MdPhone />
          <BsLinkedin />
        </div>
        <Paragraph
          text="Head Office, Top Universe Hackathon, Lagos State, Nigeria"
          styles="text-white text-xs mt-3"
        />
      </div>

      <div className="text-gray-300 ">
        <Paragraph text="Resources" styles="text-green-200 mb-5" />
        <a href="/pending">
          <Paragraph text="Create Products" styles=" mb-3" />
        </a>
        <a href="/pending">
          <Paragraph text="Buy Products" styles=" mb-3" />
        </a>
        <a href="/pending">
          <Paragraph text="Farmers Policy" styles=" mb-3" />
        </a>
      </div>

      <div className="text-gray-300">
        <Paragraph text="Company" styles="text-green-200 mb-5" />
        <a href="/pending">
          <Paragraph text="About Us" styles=" mb-3" />
        </a>
        <a href="/pending">
          <Paragraph text="Join Our Compay" styles=" mb-3" />
        </a>
        <a href="/pending">
          <Paragraph text="Logistic Partners" styles=" mb-3" />
        </a>
      </div>

      <div className="text-gray-300">
        <Paragraph text=" Quick Links" styles="text-green-200 mb-5" />
        <a href="/">
          <Paragraph text="Home" styles=" mb-3" />
        </a>
        <a href="/signup">
          <Paragraph text="Register" styles=" mb-3" />
        </a>
        <a href="/login">
          <Paragraph text="Login" styles=" mb-3" />
        </a>
        <a href="/products">
          <Paragraph text="Products" styles=" mb-3" />
        </a>
      </div>
      <Paragraph
        text="Farm Connect"
        styles="text-5xl  font-black text-green-200"
      />
    </div>
  );
}
