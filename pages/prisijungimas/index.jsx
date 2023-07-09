import React, { useEffect, useState } from "react";
import "tippy.js/dist/tippy.css"; // optional
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Meta from "../../components/Meta";
import Image from "next/image";
import { setCurrentUser } from "../../redux/createVariables";
import {
  forgotPasswordModalShow,
  emailVerifiedModalShow,
} from "../../redux/counterSlice";

const Create = () => {
  const [loginError, setLoginError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  async function checkIfInputsEntered() {
    const password = document.getElementById("password").value;
    const email = document.getElementById("emailas").value;

    if (!email) {
      document.getElementById("email_text").style.color = "#C1423F";
      return false;
    } else {
      document.getElementById("email_text").style.color = "";
    }

    if (!password) {
      document.getElementById("password_text").style.color = "#C1423F";
      return false;
    } else {
      document.getElementById("password_text").style.color = "";
    }

    return true;
  }
  useEffect(() => {
    const hash = window.location.hash;

    if (hash === "#success") {
      console.log(hash);
      dispatch(emailVerifiedModalShow());
    }
  }, [loginError]);
  async function login() {
    if (await checkIfInputsEntered()) {
      const axios = require("axios");
      try {
        const response = await axios.post(`${process.env.API_URL}/login`, {
          email: document.getElementById("emailas").value,
          password: document.getElementById("password").value,
        });

        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          dispatch(
            setCurrentUser({
              UserEmail: document.getElementById("emailas").value,
              UserToken: response.data.token,
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
      } catch (error) {
        setLoginError(error.response.data.error);
      }
    }
  }
  const handleFormSubmit = async (event) => {
    console.log("form submitted");
    event.preventDefault(); // Prevents page refresh
    login();
  };
  return (
    <div>
      <Meta title="Prisijungimas || GeraPagalba" />
      {/* <!-- Create --> */}
      <section className="relative py-24" style={{ height: "100vh" }}>
        <picture className="pointer-events-none absolute inset-0 -z-10 ">
          <Image
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full"
            layout="fill"
          />
        </picture>
        <div className="container">
          <h1 className="font-display text-jacarta-700 py-16 text-center text-4xl font-medium ">
            Prisijungimas
          </h1>
          <div className="mx-auto max-w-[48.125rem]">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="item-description"
                  className="font-display text-jacarta-700 mb-2 block "
                  id="email_text"
                >
                  El. Paštas<label className="text-red">*</label>
                </label>

                <input
                  type="email"
                  id="emailas"
                  className="border border-jacarta-100 w-full rounded-lg py-3 px-3x "
                  placeholder="vardenis.pavardenis@gmail.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="item-description"
                  className="font-display text-jacarta-700 mb-2 block"
                  id="password_text"
                >
                  Slaptažodis<label className="text-red">*</label>
                </label>

                <input
                  type="password"
                  id="password"
                  className="border border-jacarta-100 w-full rounded-lg py-3 px-3x "
                  placeholder="*********"
                  required
                />
                <br></br>
                <br></br>
                {loginError && <p style={{ color: "#EF4444" }}>{loginError}</p>}
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="submit" // Make this a submit button
                  className="bg-brand hover:brand rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                >
                  Prisijungti
                </button>
                <a
                  onClick={() => dispatch(forgotPasswordModalShow())}
                  className="text-sm text-jacarta-700 hover:text-jacarta-900"
                >
                  Pamiršote slaptažodį?
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <!-- end create --> */}
    </div>
  );
};

export default Create;
