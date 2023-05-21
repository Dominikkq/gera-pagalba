export async function GetUserData() {
  const axios = require("axios");
  if (localStorage.getItem("token")) {
    try {
      const response = await axios
        .get("http://localhost:5000/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .catch((error) => {
          console.log(error);
          localStorage.setItem("token", "");
        });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
export async function Logout() {
  localStorage.setItem("token", "");
  window.location.href = "/";
}
