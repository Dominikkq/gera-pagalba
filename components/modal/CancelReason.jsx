import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reasonModalHide } from "../../redux/counterSlice";

const CancelReasonModal = () => {
  const walletModal = useSelector((state) => state.counter.reasonModal);

  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(reasonModalHide());
    }
  };
  return (
    <div>
      {/* <!-- Wallet Modal --> */}
      <div
        onClick={closeModal}
        className={walletModal ? "block modal fade show " : "modal fade hidden"}
      >
        <div className="modal-dialog max-w-lg ">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="walletModalLabel"
                style={{ marginRight: "25px", width: "30rem" }}
              >
                Atšaukimo Priežastis
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => dispatch(reasonModalHide())}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-jacarta-700 h-6 w-6 dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                </svg>
              </button>
            </div>

            <input
              style={{ margin: "0.5rem" }}
              type="url"
              id="email"
              className="border-jacarta-100 hover:ring-accent/10 focus:ring-accent rounded-lg py-3 px-3 hover:ring-2"
              placeholder="Priežastis"
            />
            <button
              type="button"
              style={{ width: "10rem", margin: "0.6rem" }}
              className="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
              onClick={() => {
                console.log("Appointment Confirmed");
                AppointmentPayment();
              }}
            >
              Atšaukti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelReasonModal;
