import { useAuth } from "../state";
import login from "../pages/login";
import {  useModal } from "../state";
let headers = new Headers();

headers.append("Content-Type", "application/json");

let register = async (data) => {
  useModal.setState({modalText:"Getting your account ready"})
  useModal.setState({modalShown:true})
  await fetch("http://127.0.0.1:8000/auth/sign-up", {
    method: "POST",
    body: JSON.stringify(data),
    headers: headers,
  })
    .then(async (res) => {
      console.log(await res.json());
    })
    .catch((e) => {
      throw new Error("Register Failed");
    });
};

export default register;
