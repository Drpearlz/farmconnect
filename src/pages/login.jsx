import React, { useState } from "react";
import { Link } from "react-router-dom";
import FieldSet from "../components/fieldsets/fieldset";
import Button from "../components/buttons/button";
import logo from '../assets/images/logo.svg'
import login from "../apis/login";
import NavBar from "../components/navigation/navbar";
import { useAuth } from "../state";
// import { useAuth } from "../../data/store";
// import Modal from "../../components/Modal/modal";
// import Loader from "../../components/Modal/modalLoader";
export default function Login() {
//   let setAuth = useAuth((state) => state.setAuth);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  return (
    <div className=" pt-36  h-screen">
        <NavBar/>
      {/* <Modal
        text={"Invalid login details, check credentials"}
        showclose={true}
      />
      <Loader /> */}
      {/* form-container */}
      <div className="mx-auto w-1/3 flex px-5 flex-col items-center h-full text-sm max-sm:w-full ">
        <Link to={"/"}>
          <img src={logo} alt="" className="w-30 mb-5" />
        </Link>
        <h2 className="text-4xl font-semibold text-primary pb-3">
          Welcome Back!
        </h2>
        <p>
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-lime-600">
            Sign Up
          </Link>
        </p>
        <form
          action=""
          method="post"
          className="w-full pt-5"
          onSubmit={async (e) => {
            e.preventDefault();
            let data = { email: email, password: password };
            await login(data);
          }}
        >
          {/* Names container */}
          <div className="w-full flex flex-col gap-3">
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
            <fieldset className="flex items-center gap-3">
              <input type="checkbox" name="remember" id="" />
              <label htmlFor="">Remember me</label>
            </fieldset>
            <Button text="Login" />
          </div>
          <p className="pt-5 text-lime-600">Forgot Password?</p>
        </form>
      </div>
    </div>
  );
}
