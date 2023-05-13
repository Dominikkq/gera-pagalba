import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const Confirm_checkout = (props) => {
  const dispatch = useDispatch();
  const axios = require("axios");
  async function ConfirmChanges() {
    const token = localStorage.getItem("token");
    var name, lastname, profilePhoto, email;
    if (document.getElementById("new_name").value.length > 2) {
      name = document.getElementById("new_name").value;
    } else {
      if (document.getElementById("new_name").value.length > 0) {
        document.getElementById("edit_error").innerHTML = "Per trumpas vardas";
        return;
      }
    }
    if (document.getElementById("new_lastname").value.length > 2) {
      lastname = document.getElementById("new_lastname").value;
    } else {
      if (document.getElementById("new_lastname").value.length > 0) {
        document.getElementById("edit_error").innerHTML = "Per trumpa pavardė";
        return;
      }
    }

    document.getElementById("edit_error").innerHTML = "";
    console.log(document.getElementById("weekends_from"));
    var response = await axios
      .put(
        "http://localhost:5000/edit",
        {
          email: props.email,
          name: name,
          lastname: lastname,
          description: document.getElementById("new_description")?.value,
          profilePhoto: props.newImage ? props.newImage : "",
          helpOptions: props.selectedOptions,
          languageOptions: props.languages,
          rates: props.rates,
          workdayHours: {
            from: parseInt(document.getElementById("workdays_from").value),
            to: parseInt(document.getElementById("workdays_to").value),
          },
          weekendHours: {
            from: props.weekendsHour
              ? parseInt(document.getElementById("weekends_from").value)
              : 0,
            to: props.weekendsHour
              ? parseInt(document.getElementById("weekends_to").value)
              : 0,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .catch(() => {
        document.getElementById("edit_error").innerHTML = response.data.message;
      });
    document.getElementById("edit_error").style.color = "#00E573";
    document.getElementById("edit_error").innerHTML = response.data.message;
    console.log(response);
    //location.reload();

    try {
    } catch (e) {
      console.log(e);
      //dispatch(statusFailed());
    }
  }

  if (props.purpose == "edit") {
    return (
      <button
        type="button"
        className="bg-brand  hover:brand rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
        onClick={() => ConfirmChanges()}
      >
        Išsaugoti
      </button>
    );
  }

  if (props.purpose == "login") {
    return (
      <Link href="/prisijungimas">
        <button
          type="button"
          className="bg-brand  hover:brand rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
        >
          Prisijungti
        </button>
      </Link>
    );
  }
};

export { Confirm_checkout };
