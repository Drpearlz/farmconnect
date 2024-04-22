import React from "react";

export default function Heading({ text, styles }) {
  return (
    <>
      <h1 className={`text-5xl ${styles} font-semibold max-md:text-4xl`}>{text}</h1>
    </>
  );
}
