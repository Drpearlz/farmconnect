import { useAuth } from "../state";
import login from "../pages/login";
import { signup } from "../endpoints/endpoints";
import { useModal, useError, useSuccess } from "../state";
import { useNavigate } from "react-router-dom";



let headers = new Headers();

headers.append("Content-Type", "application/json");

let register = async (data) => {
  useModal.setState({ modalText: "Getting your account ready" });
  useModal.setState({ modalShown: true });
  await fetch(signup, {
    method: "POST",
    body: JSON.stringify(data),
    headers: headers,
  })
    .then(async (res) => {
      console.log(await res.json());
      if (res.status == 403) {
        useModal.setState({ modalShown: false });
        useError.setState({ errorShown: true });
        useError.setState({
          errorText: "Account already exists",
        });
      }
      if (res.ok) {
        useModal.setState({ modalShown: false });
        useSuccess.setState({
          successText: "Account Created Successfully, Please Login to Continue",
        });
        useSuccess.setState({ successShown: true });
        location.assign("/login");
      }
    })
    .catch((e) => {
      useModal.setState({ modalShown: false });
      useError.setState({ errorShown: true });
      useError.setState({ errorText: "Something went wrong, try again later" });
      throw new Error("Register Failed");
    });
};

export default register;
