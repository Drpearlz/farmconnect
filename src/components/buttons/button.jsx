import React from "react";
// import { useNavigate } from "react-router-dom";

export default function Button({ text='', styles='', action,primary=true }) {
//   let navigate = useNavigate();
  return (
    <button
      className={`${styles}   text-sm   hover:scale-95 transition duration-100 ease-in `}
      onClick={() => {
        if (!action) {
          //   navigate("/users/signup");
          console.log("hackathon");
        }
        action();
      }}
    >
      <div
        className={`${primary?'bg-primary text-white':'bg-secondary text-black'}  p-4  h-full border-[1px] border-black   flex items-center justify-center  rounded-full  font-medium`}
      >
        {text}
      </div>
    </button>
  );
}
