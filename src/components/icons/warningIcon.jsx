import React from "react";
import { MdWarning } from "react-icons/md";
import { PiWarningCircle } from "react-icons/pi";

export default function WarningIcon() {
  return (
    <div className="p-2 bg-orange-100 text-orange-600 text-base inline-block rounded-md">
      <MdWarning />
    </div>
  );
}
