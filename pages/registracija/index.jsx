import React, { useState } from "react";
import "tippy.js/dist/tippy.css"; // optional

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
        const response = await axios.post("http://localhost:5000/register", {
          name: document.getElementById("vardas").value,
          lastname: document.getElementById("create_sideOne").value,
          email: document.getElementById("create_sideTwo").value,
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
          sideOne: document.getElementById("create_sideOne").value,
          sideTwo: document.getElementById("create_sideTwo").value,
        })
      );
      dispatch(createModalShow());
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
            Registracija
          </h1>
          <div className="mx-auto max-w-[48.125rem]">
            {/* <!-- Name --> */}

            <div className="mb-6">
              <label
                htmlFor="item-name"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
                id="name_text"
              >
                Vardas <label className="text-red">*</label>
              </label>
              <input
                type="text"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                placeholder="Vardenis"
                id="vardas"
                required
              />
            </div>

            {/* <!-- External Link --> */}
            <div className="mb-6">
              <label
                htmlFor="item-external-link"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
                id="sideone_text"
              >
                Pavarde<label className="text-red">*</label>
              </label>

              <input
                type="url"
                id="create_sideOne"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                placeholder="Pavardenis"
              />
            </div>

            {/* <!-- Description --> */}
            <div className="mb-6">
              <label
                htmlFor="item-description"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
                id="sidetwo_text"
              >
                El. Paštas<label className="text-red">*</label>
              </label>

              <input
                type="url"
                id="create_sideTwo"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                placeholder="vardenis.pavardenis@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="item-description"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
                id="sidetwo_text"
              >
                Slaptažodis<label className="text-red">*</label>
              </label>

              <input
                type="url"
                id="slaptazodis"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                placeholder="*********"
              />
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <input
                type="checkbox"
                id="buyNowTerms"
                className="checked:bg-accent dark:bg-jacarta-600 text-accent border-jacarta-200 focus:ring-accent/20 dark:border-jacarta-500 h-5 w-5 self-start rounded focus:ring-offset-0"
              />
              <label
                htmlFor="buyNowTerms"
                className="dark:text-jacarta-200 text-sm"
              >
                Sutinku su duomenų valdymo politika
                <Link href="/tarms">
                  <a className="text-accent"> Terms of Service</a>
                </Link>
              </label>
            </div>
            <br></br>
            {/* <!-- Submit --> */}
            <button
              onClick={Create}
              className="bg-accent-lighter cursor-default rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
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
