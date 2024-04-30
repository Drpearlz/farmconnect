import React from "react";
import SucessIcon from "../icons/successIcon";
import { useSuccess } from "../../state";
import { MdClose } from "react-icons/md";

export default function SuccessModal() {
  let successShown = useSuccess((state) => state.successShown);
  let successText = useSuccess((state) => state.successText);
  if (successShown) {
    return (
      <div className="bg-[rgb(0,0,0,.8)] z-50 fixed bottom-0 top-0 p-5 right-0 w-screen flex items-center justify-center h-screen">
        <div className="bg-white relative  text-sm flex justify-between items-center  p-5 rounded-md lg:w-1/3 w-3/4 max-md:w-full">
          <span className="flex items-center gap-2 text-xs">
            <SucessIcon />
            {successText}
          </span>
          {/* close the error modal */}
          <div
            className="bg-red-100 p-1 text-red-700 cursor-pointer inline-block self-end rounded-full text-xl"
            onClick={() => {
              useSuccess.setState({ successShown: false });
            }}
          >
            <MdClose className="" />
          </div>
        </div>
      </div>
    );
  }
}
