import React, { useEffect, useState } from "react";
import "tippy.js/dist/tippy.css"; // optional
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Meta from "../../components/Meta";
const axios = require("axios");
import Image from "next/image";

const Create = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const {
    query: { password: pid },
  } = router;
  const dispatch = useDispatch();

  async function checkIfInputsEntered() {
    const password = document.getElementById("new_password").value;
    const password2 = document.getElementById("new_password2").value;

    if (!password) {
      document.getElementById("password_text").style.color = "#C1423F";
      return false;
    } else {
      document.getElementById("password_text").style.color = "";
    }

    if (!password2) {
      document.getElementById("password2_text").style.color = "#C1423F";
      return false;
    } else {
      document.getElementById("password2_text").style.color = "";
    }

    if (password != password2) {
      document.getElementById("password2_text").style.color = "#C1423F";
      document.getElementById("password_text").style.color = "#C1423F";
      setError("Slapžtažodžiai nesutampa");
      return false;
    } else {
      document.getElementById("password2_text").style.color = "";
      document.getElementById("password_text").style.color = "";
    }

    return true;
  }
  useEffect(() => {}, [error]);
  async function login() {
    if (await checkIfInputsEntered()) {
      try {
        const response = await axios.post(
          "https://www.regreto.com:5000/resetPassword/" + pid,
          {
            password: document.getElementById("new_password").value,
          }
        );

        if (response.data.message == "Slaptažodis pakeistas sėkmingai") {
          router.push("/prisijungimas");
        }
      } catch (error) {
        console.log(error);
        setError(error.response.data.error);
      }
    }
  }

  return (
    <div>
      <Meta title="Slaptažodžio Keitimas || GeraPagalba" />
      {/* <!-- Create --> */}
      <section className="relative py-24" style={{ height: "100vh" }}>
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <Image
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full"
            layout="fill"
          />
        </picture>
        <div className="container">
          <h1 className="font-display text-jacarta-700 py-16 text-center text-4xl font-medium ">
            Naujas Slaptažodis
          </h1>
          <div className="mx-auto max-w-[48.125rem]">
            {/* <!-- Description --> */}
            <div className="mb-6">
              <label
                htmlFor="item-description"
                className="font-display text-jacarta-700 mb-2 block "
                id="password_text"
              >
                Naujas Slaptažodis<label className="text-red">*</label>
              </label>

              <input
                id="new_password"
                className="border border-jacarta-100 w-full rounded-lg py-3 px-3x "
                type="password"
                required
                placeholder="*********"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="item-description"
                className="font-display text-jacarta-700 mb-2 block"
                id="password2_text"
              >
                Pakartokite naują slaptažodį
                <label className="text-red">*</label>
              </label>

              <input
                type="password"
                id="new_password2"
                className="border border-jacarta-100 w-full rounded-lg py-3 px-3x "
                placeholder="*********"
                required
              />
            </div>

            {error && <p style={{ color: "#EF4444" }}>{error}</p>}
            <br></br>
            {/* <!-- Submit --> */}
            <button
              onClick={login}
              className="bg-brand hover:brand rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
            >
              Keisti slaptažodį
            </button>
          </div>
        </div>
      </section>
      {/* <!-- end create --> */}
    </div>
  );
};

export default Create;
