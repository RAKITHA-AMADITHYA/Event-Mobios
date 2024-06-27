import { toast } from "react-toastify";

export function showSuccessMessage(message) {
  toast.success(message);
}

export function showErrorMessage(message) {
  toast.error(message);
}
