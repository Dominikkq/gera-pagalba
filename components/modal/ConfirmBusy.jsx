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
        <div className="modal-dialog max-w-2xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                style={{ marginRight: "15px" }}
                className="modal-title"
                id="confirmAppointmentLabel"
              >
                Užimtumo Patvirtinimas
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => dispatch(busyModalHide())}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            {/* <!-- Body --> */}
            <div className="modal-body p-6">
              <div className="flex flex-col">
                <label className="font-display text-jacarta-700 mb-3 block text-base font-semibold dark:text-white">
                  Data
                </label>
                <input
                  type="text"
                  value={date ? date : ""}
                  readOnly
                  className="dark:bg-jacarta-700 px-4 dark:border-jacarta-600 focus:ring-accent border-jacarta-100 dark:placeholder-jacarta-300 h-12 w-full border focus:ring-inset dark:text-white"
                />
                <label className="font-display text-jacarta-700 mb-3 mt-4 block text-base font-semibold dark:text-white">
                  Laikas
                </label>
                <input
                  type="text"
                  value={timeRange ? timeRange : ""}
                  readOnly
                  className="dark:bg-jacarta-700 px-4 dark:border-jacarta-600 focus:ring-accent border-jacarta-100 dark:placeholder-jacarta-300 h-12 w-full rounded-r-lg border focus:ring-inset dark:text-white"
                />
              </div>
              <br></br>
              <p className="text-red2">
                Šis laikas bus pažymėtas kaip užimtas.
              </p>
            </div>
            {/* <!-- end body --> */}

            <div className="modal-footer">
              <div className="flex items-center justify-center space-x-4">
                <button
                  type="button"
                  className="bg-red2  hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
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
      </div>
    </div>
  );
};

export default ConfirmBusyModal;
