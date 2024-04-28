import React from "react";
import { useModal } from "../../state";
import Loader from "./loading";

export default function ModalLoader() {
  const modalText = useModal((state) => state.modalText);
  const modalShown = useModal((state) => state.modalShown);

  if (modalShown) {
    return (
      <div className="bg-[rgb(0,0,0,.8)] absolute top-0 p-5 right-0 w-screen flex items-center justify-center h-screen">
        <div className="bg-white relative  text-sm flex justify-between items-center  p-5 rounded-md lg:w-1/3 w-3/4 max-md:w-full">
          {modalText}
          {/* close the error modal */}
         <Loader/>
        </div>
      </div>
    );
  }
}
