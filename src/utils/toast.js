import {toast} from 'react-hot-toast'


const toastError = (message) => {
    return toast.error(message, {
      duration: 3000,
      position: "top-center",
    });
  };
  
  const toastSuccess = (message) => {
    return toast.success(message, {
      duration: 3000,
      position: "top-center",
      
    });
  };
  
export { toastError, toastSuccess };