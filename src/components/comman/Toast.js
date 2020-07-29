import { toast } from 'react-toastify';

export const errorToast = (message) =>
  toast.error(message, {
    position: 'top-center',
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const successToast = (message) =>
  toast.success(message, {
    position: 'top-center',
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
