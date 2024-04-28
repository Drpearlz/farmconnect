import { useAuth } from "../state";
import { userStore, useModal } from "../state";
import {register} from '../endpoints/endpoints'
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.headers = {
  Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}
      `,
};

const client = axios.create({

});

let login = async (data) => {
  let header = "";

  client
    .post(register, data)
    .then(function (res) {
      console.log(res.data);
      localStorage.setItem("auth", JSON.stringify(res.data.token));
      header = res.data.user;
    })
    .catch((e) => {
      throw new Error("Login Failed");
    });
};
export default login;
