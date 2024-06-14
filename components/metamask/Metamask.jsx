import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Link from "next/link";

const Confirm_checkout = (props) => {
  const dispatch = useDispatch();

  async function confirmChanges() {
    var phone = null;
    const token = localStorage.getItem("token");
    const name = document.getElementById("new_name")?.value?.trim();
    const phoneNumber = document
      .getElementById("new_phoneNumber")
      ?.value?.trim();
    if (phoneNumber && phoneNumber != "+370") {
      phone = phoneNumber;
    }
    if (name && name.length <= 2) {
      document.getElementById("edit_error").innerHTML = "Per trumpas vardas";
      return;
    }
    let oldRates = props.rates;
    let newRates = {};
    if (oldRates) {
      Object.keys(oldRates).forEach((key) => {
        newRates[parseInt(key)] = parseInt(oldRates[key]);
      });
    }
    const requestBody = {
      email: props.email,
      name: name,
      description: document.getElementById("new_description")?.value,
      profilePhoto: props.newImage || "",
      helpOptions: props.selectedOptions,
      notes: document.getElementById("notes_enter")?.value,
      languageOptions: props.languages,
      rates: newRates,
      phoneNumber: phone,
      workdayHours: {
        from: parseInt(document.getElementById("workdays_from")?.value || 0),
        to: parseInt(document.getElementById("workdays_to")?.value || 0),
      },
    };
    if (props.weekendsHour) {
      requestBody.weekendHours = {
        from: parseInt(document.getElementById("weekends_from")?.value),
        to: parseInt(document.getElementById("weekends_to")?.value),
      };
    } else {
      requestBody.weekendHours = {
        from: 0,
        to: 0,
      };
    }
    const response = await axios.put(
      `${process.env.API_URL}/edit`,
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    document.getElementById("edit_error").style.color = "#00E573";
    document.getElementById("edit_error").innerHTML = response.data.message;
  }

  if (props.purpose === "edit") {
    return (
      <button
        type="button"
        className="bg-brand hover:brand rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
        onClick={confirmChanges}
      >
        Išsaugoti
      </button>
    );
  }

  if (props.purpose === "login") {
    return (
      <Link href="/prisijungimas">
        <button
          type="button"
          className="bg-brand hover:brand rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
        >
          Prisijungti
        </button>
      </Link>
    );
  }

  return null;
};

export { Confirm_checkout };
