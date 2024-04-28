import React from "react";
import { PiWarningCircle } from "react-icons/pi";

export default function ErrorIcon() {
  return (
    <div className="p-2 bg-red-100 text-red-600 text-base inline-block rounded-md">
      <PiWarningCircle />
    </div>
  );
}
