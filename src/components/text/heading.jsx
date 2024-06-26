import React from "react";

export default function Heading({ text, styles }) {
  return (
    <>
      <h1 className={` max-md:text-3xl ${styles} font-semibold `}>{text}</h1>
    </>
  );
}
