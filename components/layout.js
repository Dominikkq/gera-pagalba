import Navbar from "./navbar";
import Status_modal from "./modal/status_modal";
import ConfirmAppointmentModal from "./modal/ConfirmAppointmentModal";
import CreateModal from "./modal/CreateModal";
import CancelReasonModal from "./modal/CancelReason";
import BusyModal from "./modal/ConfirmBusy";
import { loadStripe } from "@stripe/stripe-js";
import ForgotPasswordModal from "./modal/ForgotPassword";
import EmailVerifiedModal from "./modal/EmailVerifiedModal";
export default function Layout({ children }) {
  const stripePromise = loadStripe(
    "pk_test_51N3IVhHZicVIiEMtNZRW1WVtxy1gz2KGUynbZ5EiGLp0IqfyxFgkEw2QcK2rD09qpStjC2fklLk0vLKQ1l5tOAYv009KFPUEL1"
  );

  return (
    <>
      <Navbar />
      <Status_modal />
      <CancelReasonModal />
      <EmailVerifiedModal />
      <ConfirmAppointmentModal stripePromise={stripePromise} />
      <BusyModal />
      <CreateModal />
      <main>{children}</main>
      <ForgotPasswordModal />
    </>
  );
}
