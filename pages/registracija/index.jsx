import React, { useState } from "react";
import "tippy.js/dist/tippy.css"; // optional
import Image from "next/image";
import { useDispatch } from "react-redux";
import Meta from "../../components/Meta";

import { createModalShow } from "../../redux/counterSlice";
import { setCreateValues } from "../../redux/createVariables";

import Link from "next/link";
const Create = () => {
  const dispatch = useDispatch();

  async function CheckIfInputsEntered() {
    var Name = document.getElementById("vardas").value;
    var SideOne = document.getElementById("create_sideOne").value;
    var SideTwo = document.getElementById("create_sideTwo").value;
    var slaptazodis = document.getElementById("slaptazodis").value;

    if (!Name) {
      document.getElementById("name_text").style.color = "#C1423F";
      return false;
    } else {
      document.getElementById("name_text").style.color = "#fff";
    }
    if (!SideOne) {
      document.getElementById("sideone_text").style.color = "#C1423F";
      return false;
    } else {
      document.getElementById("sideone_text").style.color = "#fff";
    }
    if (!SideTwo) {
      document.getElementById("sidetwo_text").style.color = "#C1423F";
      return false;
    } else {
      document.getElementById("sidetwo_text").style.color = "#fff";
    }
    if (!slaptazodis) {
      document.getElementById("slaptazodis").style.color = "#C1423F";
      return false;
    } else {
      document.getElementById("slaptazodis").style.color = "#fff";
    }

    return true;
  }
  async function Create() {
    if (await CheckIfInputsEntered()) {
      try {
        console.log("Registering");
        const axios = require("axios");
        const response = await axios.post(
          "https://www.regreto.com:5000/register",
          {
            name: document.getElementById("vardas").value,
            lastname: document.getElementById("create_sideOne").value,
            email: document.getElementById("create_sideTwo").value,
            password: document.getElementById("slaptazodis").value,
            doctor: true,
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }

      dispatch(
        setCreateValues({
          name: document.getElementById("vardas").value,
          sideOne: document.getElementById("create_sideOne").value,
          sideTwo: document.getElementById("create_sideTwo").value,
        })
      );
      dispatch(createModalShow());
    }
  }
  return (
    <div>
      <Meta title="Registracija || GeraPagalba" />
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
          <h1 className="font-display text-jacarta-700 py-16 text-center text-4xl font-medium dark:text-white">
            Registracija
          </h1>
          <div className="mx-auto max-w-[48.125rem]">
            {/* Name */}
            <div className="mb-6">
              <label
                htmlFor="vardas"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                Vardas <label className="text-red">*</label>
              </label>
              <input
                type="text"
                className="border border-jacarta-100 w-full rounded-lg py-3 px-3x "
                placeholder="Vardenis"
                id="vardas"
                required
              />
            </div>

            {/* Surname */}
            <div className="mb-6">
              <label
                htmlFor="create_sideOne"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                Pavarde<label className="text-red">*</label>
              </label>
              <input
                type="text"
                id="create_sideOne"
                className="border border-jacarta-100 w-full rounded-lg py-3 px-3x "
                placeholder="Pavardenis"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="create_sideTwo"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                El. Paštas<label className="text-red">*</label>
              </label>
              <input
                type="email"
                id="create_sideTwo"
                className="border border-jacarta-100 w-full rounded-lg py-3 px-3x "
                placeholder="vardenis.pavardenis@gmail.com"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label
                htmlFor="slaptazodis"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                Slaptažodis<label className="text-red">*</label>
              </label>
              <input
                type="password"
                id="slaptazodis"
                className="border border-jacarta-100 w-full rounded-lg py-3 px-3x "
                placeholder="*********"
                required
              />
            </div>

            <div className="mt-4 flex items-center space-x-2">
              <input
                type="checkbox"
                id="buyNowTerms"
                className="checked:bg-accent dark:bg-jacarta-600 text-accent border-jacarta-200 focus:ring-accent/20 dark:border-jacarta-500 h-5 w-5 self-start rounded focus:ring-offset-0"
                required
              />
              <label
                htmlFor="buyNowTerms"
                className="dark:text-jacarta-200 text-sm"
              >
                Sutinku su duomenų
                <Link href="/tarms">
                  <a className="text-accent"> valdymo politika</a>
                </Link>
              </label>
            </div>
            <br></br>

            {/* Submit */}
            <button
              onClick={Create}
              className="bg-brand hover:brand rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
            >
              Registruotis
            </button>
          </div>
        </div>
      </section>

      {/* <!-- end create --> */}
    </div>
  );
};

export default Create;
