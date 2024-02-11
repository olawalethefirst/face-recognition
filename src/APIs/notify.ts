import { toast } from "react-toastify";

type MessageType = "WARNING" | "ERROR" | "SUCCESS";

export default function notify(message: string, type?: MessageType) {
  switch (type) {
    case "WARNING":
      toast.warning(message);
      break;
    case "ERROR":
      toast.error(message);
      break;
    default:
      toast.success(message);
  }
}
