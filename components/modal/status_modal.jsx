import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { statusModalhide } from "../../redux/counterSlice";

const Status_modal = () => {
  const walletModal = useSelector((state) => state.counter.statusModal);

  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  useEffect(() => {
    setUserId(localStorage.getItem("successPay_userId"));
    localStorage.setItem("successPay_time", "");
    localStorage.setItem("successPay_note", "");
    localStorage.setItem("successPay_url", "");
    localStorage.setItem("successPay_doctorName", "");
    localStorage.setItem("successPay_userId", "");
    localStorage.setItem("successPay_success", false);
  }, []);

  return (
    <div>
      {/* <!-- Wallet Modal --> */}
      <div
        className={walletModal ? "block modal fade show " : "modal fade hidden"}
      >
        <div className="modal-dialog max-w-lg ">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title px-15"
                id="walletModalLabel"
                style={{ marginRight: "25px" }}
              >
                Registracija Sėkminga
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => dispatch(statusModalhide())}
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

            <div className="success-checkmark" style={{ paddingTop: "1rem" }}>
              <div className="check-icon">
                <span className="icon-line line-tip"></span>
                <span className="icon-line line-long"></span>
                <div className="icon-circle"></div>
                <div className="icon-fix"></div>
              </div>
            </div>

            <div className="modal-footer">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex flex-col">
                  <a
                    href={"/user/" + userId}
                    className="font-display text-brand2 underline mb-3 block text-base font-semibold dark:text-white"
                  >
                    Mano Konsultacijos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status_modal;
