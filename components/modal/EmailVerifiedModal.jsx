import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  emailVerifiedModalHide,
  returnAll,
  setCreateData,
} from "../../redux/counterSlice";
import { Confirm_checkout } from "../metamask/Metamask";
const CreateModal = () => {
  const { emailVerifiedModal } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      {/* <!-- Buy Now Modal --> */}
      <div
        className={emailVerifiedModal ? "modal fade show block" : "modal fade"}
      >
        <div className="modal-dialog max-w-2xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="buyNowModalLabel">
                El. Paštas patvirtintas sėkmingai
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => dispatch(emailVerifiedModalHide())}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-jacarta-700 h-6 w-6 "
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                </svg>
              </button>
            </div>

            {/* <!-- Body --> */}
            <div className="modal-body">
              <div className="success-checkmark">
                <div className="check-icon">
                  <span className="icon-line line-tip"></span>
                  <span className="icon-line line-long"></span>
                  <div className="icon-circle"></div>
                  <div className="icon-fix"></div>
                </div>
              </div>
            </div>
            {/* <!-- end body --> */}

            <div className="modal-footer">
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={() => dispatch(emailVerifiedModalHide())}
                  type="button"
                  className="bg-brand hover:brand rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                >
                  Prisijungti
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
