let base_url = "http://127.0.0.1:8000";

export const testRequest = async () => {
  await fetch(`${base_url}/products`, {
    method: "get",
  }).then(async (res) => {
    console.log(await res.json());
  });
};
