import React, { useState } from "react";
import { Link } from "react-router-dom";
import FieldSet from "../components/fieldsets/fieldset";
import Button from "../components/buttons/button";
import logo from "../assets/images/logo.svg";
import register from "../apis/register";
import c1 from '../assets/c1.png';

export default function Register() {
  let [first_name, setFname] = useState("");
  let [last_name, setLname] = useState("");
  let [email, setEmail] = useState("");
  let [lga, setLGA] = useState("");
  let [address, setAddress] = useState("");
  let [city, setCity] = useState("");
  let [password, setPassword] = useState("");
  let [confirm, setConfirm] = useState("");

  return (
    <>
      <div className="flex justify-center h-screen">
        {/* Image section */}
        <div
          className="hidden lg:block lg:w-1/2 lg:order-2 bg-cover bg-center"
          style={{
            backgroundImage: `url(${c1})`,
          }}
        >
          <div className="flex items-center h-full px-20  bg-opacity-40">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                FarmConnect
              </h2>
              <p className="max-w-xl mt-3 text-black-900">
              Sign up For Your Bridge to Fresh, Locally Sourced Produce,
              from Farms Straight to Your Table.
              </p>
            </div>
          </div>
        </div>

        {/* Form section */}
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/3 lg:order-1">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <Link to={"/"}>
                  <img src={logo} alt="" className="w-30" />
                </Link>
              </div>
              <h2 className="text-4xl font-semibold text-primary py-3">
                Create Account
              </h2>
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-lime-600">
                  Sign In
                </Link>
              </p>
            </div>
            <form
              action=""
              method="post"
              className="w-full pt-5"
              onSubmit={async (e) => {
                e.preventDefault();
                let data = { first_name, last_name, email, password };
                if (password !== confirm) {
                  showModal();
                } else {
                  await register(data);
                }
              }}
            >
              {/* Names container */}
              <div className="w-full flex flex-col gap-3">
                <div className="flex gap-10 max-sm:gap-5">
                  <FieldSet
                    label={"First Name"}
                    type={"text"}
                    name={"fname"}
                    state={first_name}
                    setState={setFname}
                  />
                  <FieldSet
                    label={"Last Name"}
                    type={"text"}
                    name={"lname"}
                    state={last_name}
                    setState={setLname}
                  />
                </div>
                <FieldSet
                  label={"Local Government Area"}
                  type={"text"}
                  name={"lga"}
                  state={lga}
                  setState={setLGA}
                />
                <FieldSet
                  label={"Address"}
                  type={"text"}
                  name={"address"}
                  state={address}
                  setState={setAddress}
                />
                <FieldSet
                  label={"City"}
                  type={"text"}
                  name={"fname"}
                  state={city}
                  setState={setCity}
                />
                <FieldSet
                  label={"Email"}
                  type={"email"}
                  name={"email"}
                  state={email}
                  setState={setEmail}
                />
                <FieldSet
                  label={"Password"}
                  type={"password"}
                  name={"password"}
                  state={password}
                  setState={setPassword}
                />
                <FieldSet
                  label={"Confirm Password"}
                  type={"password"}
                  name={"password"}
                  state={confirm}
                  setState={setConfirm}
                />
                {/* <fieldset className="flex items-center gap-3">
                  <input type="checkbox" name="remember" id="" />
                  <label htmlFor="">Remember me</label>
                </fieldset> */}
                <Button text="Create Account" styles="mt-5" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
