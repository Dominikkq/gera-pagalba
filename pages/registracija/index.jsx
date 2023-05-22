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
    var SideOne = document.getElementById("pavarde").value;
    var SideTwo = document.getElementById("emailas").value;
    var slaptazodis = document.getElementById("slaptazodis").value;

    if (!Name) {
      document.getElementById("vardas_text").style.color = "#C1423F";
      return false;
    } else {
      document.getElementById("vardas_text").style.color = "";
    }
    if (!SideOne) {
      document.getElementById("pavarde_text").style.color = "#C1423F";
      return false;
    } else {
      document.getElementById("pavarde_text").style.color = "";
    }
    if (!SideTwo) {
      document.getElementById("email_text").style.color = "#C1423F";
      return false;
    } else {
      document.getElementById("email_text").style.color = "";
    }
    if (!slaptazodis) {
      document.getElementById("password_text").style.color = "#C1423F";
      return false;
    } else {
      document.getElementById("password_text").style.color = "";
    }

    return true;
  }
  async function Create() {
    if (await CheckIfInputsEntered()) {
      try {
        console.log("Registering");
        const axios = require("axios");
        const response = await axios.post("https://regreto.com:3000/register", {
          name: document.getElementById("vardas").value,
          lastname: document.getElementById("pavarde").value,
          email: document.getElementById("emailas").value,
          password: document.getElementById("slaptazodis").value,
          doctor: true,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }

      dispatch(
        setCreateValues({
          name: document.getElementById("vardas").value,
          sideOne: document.getElementById("pavarde").value,
          sideTwo: document.getElementById("emailas").value,
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
            Registracija
          </h1>
          <div className="mx-auto max-w-[48.125rem]">
            {/* Name */}
            <div className="mb-6">
              <label
                id="vardas_text"
                htmlFor="vardas"
                className="font-display text-jacarta-700 mb-2 block "
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
                id="pavarde_text"
                htmlFor="create_sideOne"
                className="font-display text-jacarta-700 mb-2 block "
              >
                Pavarde<label className="text-red">*</label>
              </label>
              <input
                type="text"
                id="pavarde"
                className="border border-jacarta-100 w-full rounded-lg py-3 px-3x "
                placeholder="Pavardenis"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label
                id="email_text"
                htmlFor="create_sideTwo"
                className="font-display text-jacarta-700 mb-2 block "
              >
                El. Paštas<label className="text-red">*</label>
              </label>
              <input
                type="email"
                id="emailas"
                className="border border-jacarta-100 w-full rounded-lg py-3 px-3x "
                placeholder="vardenis.pavardenis@gmail.com"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label
                htmlFor="slaptazodis"
                id="password_text"
                className="font-display text-jacarta-700 mb-2 block "
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
                className="checked:bg-accent  text-accent border-jacarta-200 focus:ring-accent/20  h-5 w-5 self-start rounded focus:ring-offset-0"
                required
              />
              <label htmlFor="buyNowTerms" className=" text-sm">
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
