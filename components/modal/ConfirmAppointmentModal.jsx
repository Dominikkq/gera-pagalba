import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeConfirmAppointmentModal } from "../../redux/counterSlice";

import axios from "axios";

const ConfirmAppointmentModal = ({ stripePromise }) => {
  const { confirmAppointmentModalValue, confirmAppointmentModalData } =
    useSelector((state) => state.counter);
  const dispatch = useDispatch();

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
      const response = await axios.post(
        "http://localhost:5000/create-checkout-session",
        {
          userId: confirmAppointmentModalData.user,
          doctorId: confirmAppointmentModalData.doctorId,
          start: confirmAppointmentModalData.start,
          end: confirmAppointmentModalData.end,
          notes: confirmAppointmentModalData.notes,
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
        <div className="modal-dialog max-w-2xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                style={{ marginRight: "15px" }}
                className="modal-title"
                id="confirmAppointmentLabel"
              >
                Registracijos Patvirtinimas
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => dispatch(closeConfirmAppointmentModal())}
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
            </div>
            {/* <!-- end body --> */}

            <div className="modal-footer">
              <div className="flex items-center justify-center space-x-4">
                <button
                  type="button"
                  className="bg-brand  hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
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
