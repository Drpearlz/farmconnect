import React from "react";

export default function Heading({ text, styles }) {
  return (
    <>
      <h1 className={`  ${styles} font-semibold max-md:text-3xl`}>
        {text}
      </h1>
    </>
  );
}
