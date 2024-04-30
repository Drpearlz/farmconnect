import React from "react";
import { useError } from "../../state";
import { MdClose, MdWarning } from "react-icons/md";
import { ImWarning } from "react-icons/im";
import { PiWarningCircleBold } from "react-icons/pi";
import WarningIcon from "../icons/warningIcon";

export default function ErrorModal() {
  const errorShown = useError((state) => state.errorShown);
  const errorText = useError((state) => state.errorText);

  if (errorShown) {
    return (
      <div className="bg-[rgb(0,0,0,.8)] z-50 fixed bottom-0 top-0 p-5 right-0 w-screen flex items-center justify-center h-screen">
        <div className="bg-white relative  text-sm flex justify-between items-center  p-5 rounded-md lg:w-1/3 w-3/4 max-md:w-full">
          <span className="flex items-center gap-2 text-xs">
            <WarningIcon />
            {errorText}
          </span>
          {/* close the error modal */}
          <div
            className="bg-red-100 p-1 text-red-700 cursor-pointer inline-block self-end rounded-full text-xl"
            onClick={() => {
              useError.setState({ errorShown: false });
            }}
          >
            <MdClose className="" />
          </div>
        </div>
      </div>
    );
  }
}
