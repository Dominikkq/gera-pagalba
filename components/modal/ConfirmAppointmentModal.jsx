import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeConfirmAppointmentModal } from "../../redux/counterSlice";

import axios from "axios";

const ConfirmAppointmentModal = ({ stripePromise }) => {
  const { confirmAppointmentModalValue, confirmAppointmentModalData } =
    useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [notes, setNotes] = useState("");

  const [date, timeRange] = confirmAppointmentModalData.date
    ? confirmAppointmentModalData.date.split(", ")
    : "";
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      localStorage.setItem("successPay_time", "");
      localStorage.setItem("successPay_note", "");
      localStorage.setItem("successPay_url", "");
      localStorage.setItem("successPay_doctorName", "");
      localStorage.setItem("successPay_userId", "");
      dispatch(closeConfirmAppointmentModal());
    }
  };

  async function AppointmentPayment() {
    try {
      localStorage.setItem("successPay_time", date);
      localStorage.setItem("successPay_note", confirmAppointmentModalData.note);
      localStorage.setItem("successPay_url", window.location.href);
      localStorage.setItem(
        "successPay_doctorName",
        confirmAppointmentModalData.doctor
      );
      localStorage.setItem(
        "successPay_userId",
        confirmAppointmentModalData.user
      );
      localStorage.setItem(
        "successPay_doctorId",
        confirmAppointmentModalData.doctorId
      );
      console.log(confirmAppointmentModalData);
      const response = await axios.post(
        "http://178.16.33.113:5000/create-checkout-session",
        {
          userId: confirmAppointmentModalData.user,
          doctorId: confirmAppointmentModalData.doctorId,
          start: confirmAppointmentModalData.start,
          end: confirmAppointmentModalData.end,
          notes: notes,
        }
      );

      const sessionId = response.data.sessionId;
      const stripe = await stripePromise;

      stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      console.error("Error redirecting to checkout:", err);
    }
  }
  return (
    <div>
      <div
        onClick={closeModal}
        className={
          confirmAppointmentModalValue
            ? "block modal fade show "
            : "modal fade hidden"
        }
      >
        <div
          onClick={closeModal}
          className={
            confirmAppointmentModalValue
              ? "block modal fixed inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out"
              : "modal hidden"
          }
        >
          <div
            onClick={closeModal}
            className={
              confirmAppointmentModalValue
                ? "block modal fixed inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out"
                : "modal hidden"
            }
          >
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
              <div className="flex items-center justify-between">
                <h5 className="text-lg font-semibold">
                  Registracijos Patvirtinimas
                </h5>
                <button
                  type="button"
                  className="ml-8 focus:outline-none"
                  onClick={() => dispatch(closeConfirmAppointmentModal())}
                >
                  <span className="text-gray-500">&times;</span>
                </button>
              </div>
              <div className="mt-6">
                <div className="mb-4">
                  <label className="block text-gray-500 text-sm mb-1">
                    Data
                  </label>
                  <p className="text-lg">
                    {date ? (timeRange ? date + " " + timeRange : "") : ""}
                  </p>
                </div>
                <div>
                  <label className="block text-gray-500 text-sm mb-1">
                    Kaina
                  </label>
                  <p className="text-lg">
                    {timeRange ? timeRange : "Nenurodyta"}
                  </p>
                </div>
                <div className="mt-4">
                  <label className="block text-gray-500 text-sm mb-1">
                    Pastabos gydytojui
                  </label>
                  <textarea
                    id="notes_enter"
                    className="resize-none border border-gray-300 rounded-md p-2 w-full h-24 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Įveskite pastabas..."
                    onChange={(e) => setNotes(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition-colors duration-300 ease-in-out focus:outline-none"
                  onClick={() => {
                    console.log("Appointment Confirmed");
                    AppointmentPayment();
                  }}
                >
                  Patvirtinti
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAppointmentModal;
