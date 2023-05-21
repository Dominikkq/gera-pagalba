import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { busyModalHide } from "../../redux/counterSlice";

import axios from "axios";

const ConfirmBusyModal = ({}) => {
  const { busyModal, busyModalData } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [date, timeRange] = busyModalData.date
    ? busyModalData.date.split(", ")
    : "";
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(busyModalHide());
    }
  };

  async function Busy() {
    try {
      const response = await axios.post(
        "http://localhost:5000/busy",
        {
          start: busyModalData.start,
          end: busyModalData.end,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      if (response.data.status == "success") {
        dispatch(busyModalHide());
        location.reload();
      }
    } catch (err) {
      console.error("Error redirecting to checkout:", err);
    }
  }

  return (
    <div>
      <div
        onClick={closeModal}
        className={busyModal ? "block modal fade show " : "modal fade hidden"}
      >
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs">
          <div className="flex items-center justify-between">
            <h5 className="text-lg font-semibold">Užimtumo Patvirtinimas</h5>
            <button
              type="button"
              className="ml-8 focus:outline-none"
              onClick={() => dispatch(busyModalHide())}
            >
              <span className="text-gray-500">&times;</span>
            </button>
          </div>
          <div className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-500 text-sm mb-1">Data</label>
              <p className="text-lg">
                {date ? (timeRange ? date + " " + timeRange : "") : ""}
              </p>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              className="px-6 py-2 bg-red2 hover:bg-red-600 text-white rounded-lg shadow-md transition-colors duration-300 ease-in-out focus:outline-none"
              onClick={() => {
                console.log("Appointment Confirmed");
                Busy();
              }}
            >
              Patvirtinti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBusyModal;
