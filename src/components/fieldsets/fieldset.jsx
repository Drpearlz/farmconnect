import React, { useRef, useState } from "react";
import { IoMdEye } from "react-icons/io";

export default function FieldSet({
  label,
  name,
  type,
  placeholder = ` ${label?.toLowerCase()}`,
  required = true,
  state,
  setState = () => {},
}) {
  let inputRef = useRef(null);
  let [showPassword,setShowPassword]=useState(false)
  return (
    <div className="w-full">
      <fieldset className="flex flex-col gap-2 ">
        <label htmlFor="input">{label}</label>
        <span className="w-full relative">
          <input
            placeholder={placeholder}
            onChange={(e) => {
              if (type == "file") {
                setState(e.target.files[0]);
              } else {
                setState(e.target.value);
              }
            }}
            type={type}
            required={required}
            className="border-[1px] bg-white rounded-md p-3 w-full"
            name={name}
            accept={type == "file" ? "image/*" : null}
            ref={inputRef}
          />
          {type == "password" && (
            <span
              className="absolute right-2 text-lg cursor-pointer top-1/2 -translate-y-1/2"
              onClick={() => {
                inputRef.current.type='text'
              }}
            >
              <IoMdEye />
            </span>
          )}
        </span>
      </fieldset>
    </div>
  );
}
