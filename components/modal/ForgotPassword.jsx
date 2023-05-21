import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { forgotPasswordModalHide } from "../../redux/counterSlice";
import axios from "axios";

const ForgotPasswordModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    query: { user: pid },
  } = router;
  const { forgotPasswordModal } = useSelector((state) => state.counter);

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(forgotPasswordModalHide());
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear any previous error when email changes
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Prašome įvesti el. pašto adresą"); // Set error message if email field is empty
      return;
    }

    try {
      const response = await axios.post("www.regreto.com:5000/forgotPassword", {
        email,
      });
      if (response.status === 200) {
        // Success, handle accordingly (e.g., show success message)
        setSuccess(response.data.message);
        console.log("Password reset email sent successfully");
      }
    } catch (err) {
      // Handle error (e.g., show error message)
      console.error("Failed to send password reset email:", err);
    }
  };

  return (
    <div
      className={forgotPasswordModal ? "modal fade show block" : "modal fade"}
    >
      <div onClick={closeModal} className="modal fade show">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs">
          <div className="flex items-center justify-between">
            <h5 className="text-lg font-semibold">Slaptažodžio keitimas</h5>
            <button
              type="button"
              className="ml-8 focus:outline-none"
              onClick={() => dispatch(forgotPasswordModalHide())}
            >
              <span className="text-gray-500">&times;</span>
            </button>
          </div>
          <div className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-500 text-sm mb-1">
                El. pašto adresas
              </label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            {!success ? (
              <button
                type="button"
                className="px-6 py-2 bg-red2 hover:bg-red-600 text-white rounded-lg shadow-md transition-colors duration-300 ease-in-out focus:outline-none"
                onClick={handleForgotPassword}
              >
                Siųsti slaptažodžio atkūrimo laišką
              </button>
            ) : (
              <p className="text-jacarta-500 mx-auto mb-5 max-w-md text-center text-lg">
                {success}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
