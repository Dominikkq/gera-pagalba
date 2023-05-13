import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Confirm_checkout } from "../metamask/Metamask";
import { validationModalHide } from "../../redux/counterSlice";

const Validation_modal = () => {
  const validationModal = useSelector((state) => state.counter.validationModal);
  const dispatch = useDispatch();

  var ETHAmount = 0;
  var currency = "ETH";
  const {
    Selected_Validation_title,
    Selected_Validation_sideOne,
    Selected_Validation_sideTwo,
    Selected_Validation_selectedSide,
  } = useSelector((state) => state.counter);

  return (
    <div>
      <div className={validationModal ? "modal fade show block" : "modal fade"}>
        <div className="modal-dialog max-w-2xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="placeBidLabel">
                Confirm Validation
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => dispatch(validationModalHide())}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-jacarta-700 h-6 w-6 dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
                </svg>
              </button>
            </div>

            {/* <!-- Body --> */}
            <div className="modal-body p-6">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-display text-jacarta-700 text-sm font-semibold dark:text-white">
                  Question
                </span>
              </div>
              <div className="dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t  py-4">
                <div>
                  <a className="text-accent text-sm">
                    {Selected_Validation_title}
                  </a>
                </div>
              </div>

              <span className="font-display text-jacarta-700 text-sm font-semibold dark:text-white">
                Answer
              </span>
              <div className="dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4">
                <div>
                  <a className="text-accent text-sm">
                    {Selected_Validation_selectedSide == 1
                      ? Selected_Validation_sideOne
                      : Selected_Validation_sideTwo}
                  </a>
                </div>
              </div>
              {/* <!-- Terms --> */}
              <div className="mt-4 flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="checked:bg-accent dark:bg-jacarta-600 text-accent border-jacarta-200 focus:ring-accent/20 dark:border-jacarta-500 h-5 w-5 self-start rounded focus:ring-offset-0"
                />
                <label
                  htmlFor="terms"
                  className="dark:text-jacarta-200 text-sm"
                >
                  By checking this box, I confirm the above information is
                  correct.
                </label>
              </div>
            </div>

            {/* <!-- end body --> */}
            <div className="modal-footer">
              <div className="flex items-center justify-center space-x-4">
                <Confirm_checkout purpose="validate" price={ETHAmount} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Validation_modal;
