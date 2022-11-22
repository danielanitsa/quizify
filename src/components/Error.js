import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Error() {
  toast.error("Enter all fields !", {
    position: toast.POSITION.BOTTOM_CENTER,
    duration: 7000,
  });
  return (
    <div>
      <ToastContainer className="ToastifyError" />
    </div>
  );
}

export default Error;
