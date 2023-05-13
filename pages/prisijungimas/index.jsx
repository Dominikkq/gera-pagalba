import React, { useEffect, useState } from "react";
import "tippy.js/dist/tippy.css"; // optional
import { useRouter, router } from "next/router";
import { useDispatch } from "react-redux";
import Meta from "../../components/Meta";

import { setCurrentUser } from "../../redux/createVariables";

const Create = () => {
  const [LoginError, setLoginError] = useState("");

  const dispatch = useDispatch();

  async function CheckIfInputsEntered() {
    var Password = document.getElementById("password").value;
    var Email = document.getElementById("emailas").value;

    if (!Password) {
      document.getElementById("email_text").style.color = "#C1423F";
      return false;
    } else {
      document.getElementById("email_text").style.color = "#fff";
    }
    if (!Email) {
      document.getElementById("password_text").style.color = "#C1423F";
      return false;
    } else {
      document.getElementById("password_text").style.color = "#fff";
    }

    return true;
  }
  async function Login() {
    if (await CheckIfInputsEntered()) {
      const axios = require("axios");
      const response = await axios
        .post("http://localhost:5000/login", {
          email: document.getElementById("emailas").value,
          password: document.getElementById("password").value,
        })
        .then(function (response) {
          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            dispatch(
              setCurrentUser({
                UserEmail: document.getElementById("emailas").value,
                UserToken: response.data.token,
                UserFullName: response.data.name + " " + response.data.lastname,
              })
            );
            var url = localStorage.getItem("redirect_prisijungimas");
            if (localStorage.getItem("redirect_prisijungimas")) {
              localStorage.setItem("redirect_prisijungimas", "");
              router.push(url);
            } else {
              router.push("/");
            }
          } else {
            console.log(response);
          }
        })
        .catch(function (error) {
          setLoginError(error.response);
        });
    }
  }

  return (
    <div>
      <Meta title="Create || Xhibiter | NFT Marketplace Next.js Template" />
      {/* <!-- Create --> */}
      <section className="relative py-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full"
          />
        </picture>
        <div className="container">
          <h1 className="font-display text-jacarta-700 py-16 text-center text-4xl font-medium dark:text-white">
            Prisijungimas
          </h1>
          <div className="mx-auto max-w-[48.125rem]">
            {/* <!-- Description --> */}
            <div className="mb-6">
              <label
                htmlFor="item-description"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
                id="email_text"
              >
                El. Paštas<label className="text-red">*</label>
              </label>

              <input
                type="url"
                id="emailas"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                placeholder="vardenis.pavardenis@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="item-description"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
                id="password_text"
              >
                Slaptažodis<label className="text-red">*</label>
              </label>

              <input
                type="url"
                id="password"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                placeholder="*********"
              />
            </div>
            <p style={{ color: "#EF4444" }}>{LoginError}</p>
            <br></br>
            {/* <!-- Submit --> */}
            <button
              onClick={Login}
              className="bg-accent-lighter cursor-default rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
            >
              Prisijungti
            </button>
          </div>
        </div>
      </section>
      {/* <!-- end create --> */}
    </div>
  );
};

export default Create;
