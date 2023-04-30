import { toast } from "react-hot-toast";

export function toastMessage  (text: string, color: string, duration?: number) {
      return toast(text, {
        duration: duration || 4000,
        position: "bottom-center",
        style: {
          color: "#fff",
          backgroundColor: color || "rgba(0, 0, 0, 0.85)",
          fontSize: "14px",
          padding: "24px 32px",
          letterSpacing: "0.25px",
        },
      });
    };