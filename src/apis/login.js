import { useAuth } from "../state";
import { userStore, useModal, useError, useSuccess } from "../state";
import { signin, get_user } from "../endpoints/endpoints";


let headers = new Headers();
headers.append("Content-Type", "application/json");

let login = async (data) => {
  await fetch(signin, {
    method: "POST",
    body: JSON.stringify(data),
    headers: headers,
  })
    .then(async (res) => {
      if (res.status == 403) {
        useError.setState({
          errorText: "Invalid Credentials",
        });
        useError.setState({ errorShown: true });
      }
      if (res.ok) {
        let data = await res.json();
        let token = data.token;
        localStorage.setItem("token", token);
        useAuth.setState({ isAuthenticated: true });
        await fetch(get_user, {
          method: "get",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then(async (res) => {
          let data = await res.json();
          userStore.setState({ user: data });
          localStorage.setItem("user", JSON.stringify(data));
          location.assign("/user/dashboard");
        });
      }
    })
    .catch((error) => {
      useError.setState({
        errorText: "Something went wrong, please try again later",
      });
      useError.setState({ errorShow: true });
      throw new Error(error);
    });
};
export default login;
