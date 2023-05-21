import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    localStorage.setItem("successPay_success", true);
    if (localStorage.getItem("successPay_url")) {
      window.location.href = localStorage.getItem("successPay_url");
    } else {
      console.log(localStorage.getItem("successPay_url"));
      //window.location.href = "/";
    }
  }, []);

  return <div></div>;
};

export default Contact;
