import React, { useState } from "react";
import { Link } from "react-router-dom";
import FieldSet from "../components/fieldsets/fieldset";
import Button from "../components/buttons/button";
import logo from "../assets/images/logo.svg";
import register from "../apis/register";
import c1 from "../assets/c1.png";
import NavBar from "../components/navigation/navbar";
import { useError, useModal } from "../state";
import ErrorModal from "../components/poppups/error";
import ModalLoader from "../components/poppups/processingModal";

export default function Register() {
  let [first_name, setFname] = useState("");
  let [last_name, setLname] = useState("");
  let [email, setEmail] = useState("");
  let [lga, setLGA] = useState("");
  let [address, setAddress] = useState("");
  let [address_city, setCity] = useState("");
  let [password, setPassword] = useState("");
  let [confirm, setConfirm] = useState("");

  let HandleRegister = (e) => {
    e.preventDefault();
    let data = {
      first_name,
      last_name,
      email,
      password,
      address_city,
      address,
      lga,
      role: "farmer",
    };
    if (password != confirm) {
      useError.setState({errorText:"Passwords do not match"})
      useError.setState({errorShown:true})
    } else {
      console.log(data);
      register(data);
    }
  };

  return (
    <div className=" pt-28 h-full ">
      <NavBar />
      <ErrorModal />
      <ModalLoader />
      {/* <Modal
        text={
          password == confirm
            ? "Account with email already exists"
            : "Passwords do not match"
        }
      />
      <Loader /> */}
      {/* form-container */}
      <div className="mx-auto w-1/2 px-5 flex flex-col items-center text-sm max-sm:w-full ">

        <h2 className="text-4xl font-semibold text-primary py-3 ">
          Create Account
        </h2>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-lime-600">
            Sign In
          </Link>
        </p>
        <form
          action=""
          method="post"
          className="w-full pt-5"
          onSubmit={async (e) => {
            HandleRegister(e);
          }}
        >
          {/* Names container */}
          <div className="w-full flex flex-col gap-3">
            <div className="grid grid-cols-3 max-md:grid-cols-2 gap-5 max-md:gap-2 gap-y-2">
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
              <FieldSet
                label={"LGA"}
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
                state={address_city}
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
            </div>

            {/* <fieldset className="flex items-center gap-3">
              <input type="checkbox" name="remember" id="" />
              <label htmlFor="">Remember me</label>
            </fieldset> */}
            <Button text="Create Account" styles="mt-5" />
          </div>
        </form>
      </div>
    </div>
  );
}
