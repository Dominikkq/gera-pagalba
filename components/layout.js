import Navbar from "./navbar";
import Status_modal from "./modal/status_modal";
import ConfirmAppointmentModal from "./modal/ConfirmAppointmentModal";
import CreateModal from "./modal/CreateModal";
import CancelReasonModal from "./modal/CancelReason";
import BusyModal from "./modal/ConfirmBusy";
import { loadStripe } from "@stripe/stripe-js";
import ForgotPasswordModal from "./modal/ForgotPassword";
import EmailVerifiedModal from "./modal/EmailVerifiedModal";
import { useEffect, useState } from "react";
export default function Layout({ children }) {
  const [stripe, setStripe] = useState();
  useEffect(() => {
    setStripe(
      loadStripe(
        "pk_test_51PMC2t2MBAXhTOiLtiGjUSC86yATR1cFUVLgJ5eBrmAM45cIRUiWF9ZB3BnRXaZadnI10CHTq3vcVWLLGzSZEYI300La1z4DcF"
      )
    );
  }, []);

  return (
    <>
      <Navbar />
      <Status_modal />
      <CancelReasonModal />
      <EmailVerifiedModal />
      <ConfirmAppointmentModal stripePromise={stripe} />
      <BusyModal />
      <CreateModal />
      <main>{children}</main>
      <ForgotPasswordModal />
    </>
  );
}
