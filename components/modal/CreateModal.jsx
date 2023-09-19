import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  buyModalHide,

} from "../../redux/counterSlice";
import { Confirm_checkout } from "../metamask/Metamask";
const CreateModal = () => {
  const { buyModal } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      {/* <!-- Buy Now Modal --> */}
      <div className={buyModal ? "modal fade show block" : "modal fade"}>
        <div className="modal-dialog max-w-2xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="buyNowModalLabel"
                style={{ paddingRight: "50px" }}
              >
                Registracija Sekminga
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => dispatch(buyModalHide())}
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
            <div className="modal-body p-6">
              <div className="success-checkmark" >
                <div className="check-icon" style={{margin: "auto"}}>
                  <span className="icon-line line-tip"></span>
                  <span className="icon-line line-long"></span>
                  <div className="icon-circle"></div>
                  <div className="icon-fix"></div>
                </div>
              </div>

            </div>
            {/* <!-- end body --> */}
            <p className="text-center ">
                Patvirtinkite el. pašta prieš jungiantis
              </p>
            <div className="modal-footer">
              <div className="flex items-center justify-center space-x-4">
                <Link href="/prisijungimas">
                  <button
                    onClick={() => dispatch(buyModalHide())}
                    type="button"
                    className="bg-brand hover:brand rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                  >
                    Prisijungti
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
