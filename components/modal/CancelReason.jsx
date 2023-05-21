import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reasonModalHide } from "../../redux/counterSlice";
import axios from "axios";
const CancelReasonModal = () => {
  const walletModal = useSelector((state) => state.counter.reasonModal);
  const appointmentId = useSelector(
    (state) => state.counter.reasonAppointmentID
  );

  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(reasonModalHide());
    }
  };

  //TODO: CANCEL DOCTOR APPOINEMTN WITH REASON

  const CancelAppointmentForDoctor = async () => {
    const response = await axios.delete(
      `https://www.regreto.com:5000/appointmentsCancelforDoctor/${appointmentId}/
        ${document.getElementById("doctor_cancel_reason").value}
      `,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    if (response.data.message === "Appointment cancelled successfully") {
      location.reload();
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
                style={{ marginRight: "25px", MaxWidth: "30rem" }}
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
              id="doctor_cancel_reason"
              className="border-jacarta-100 hover:ring-accent/10 focus:ring-accent rounded-lg py-3 px-3 hover:ring-2"
              placeholder="Priežastis"
            />
            <button
              type="button"
              style={{
                width: "10rem",
                margin: "auto",
                marginBottom: "1rem",
              }}
              className="px-6 py-2 bg-red2 hover:bg-red-600 text-white rounded-lg shadow-md transition-colors duration-300 ease-in-out focus:outline-none"
              onClick={() => {
                CancelAppointmentForDoctor();
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
