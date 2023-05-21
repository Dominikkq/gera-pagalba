import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Link from "next/link";

const Confirm_checkout = (props) => {
  const dispatch = useDispatch();

  async function confirmChanges() {
    const token = localStorage.getItem("token");
    const name = document.getElementById("new_name")?.value?.trim();
    const lastname = document.getElementById("new_lastname")?.value?.trim();

    if (name && name.length <= 2) {
      document.getElementById("edit_error").innerHTML = "Per trumpas vardas";
      return;
    }

    if (lastname && lastname.length <= 2) {
      document.getElementById("edit_error").innerHTML = "Per trumpa pavardė";
      return;
    }

    try {
      const requestBody = {
        email: props.email,
        name: name,
        lastname: lastname,
        description: document.getElementById("new_description")?.value,
        profilePhoto: props.newImage || "",
        helpOptions: props.selectedOptions,
        notes: document.getElementById("notes_enter")?.value,
        languageOptions: props.languages,
        rates: props.rates,
        workdayHours: {
          from: parseInt(document.getElementById("workdays_from")?.value || 0),
          to: parseInt(document.getElementById("workdays_to")?.value || 0),
        },
      };

      if (props.weekendsHour) {
        requestBody.weekendHours = {
          from: parseInt(document.getElementById("weekends_from").value),
          to: parseInt(document.getElementById("weekends_to").value),
        };
      }

      const response = await axios.put(
        "https://www.regreto.com:5000/doctors/edit",
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
      console.log(response);
    } catch (error) {
      document.getElementById("edit_error").innerHTML =
        error.response.data.message;
      console.log(error);
    }
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
