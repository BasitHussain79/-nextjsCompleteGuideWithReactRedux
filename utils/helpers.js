/* eslint-disable no-multiple-empty-lines */
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// toast success handler
const toastEmitterSuccess = (data) => {
  toast.success(data, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};

// toast error handler
const toastEmitterError = (data) => {
  toast.error(data, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};

export { toastEmitterSuccess, toastEmitterError };
