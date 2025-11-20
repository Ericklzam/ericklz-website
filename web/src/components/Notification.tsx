import { useEffect } from "react";

type NotificationProps = {
  message: string;
  type: "success" | "error";
  onClose: () => void;
};

export default function Notification({ message, type, onClose }: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-8 right-8 z-50 px-6 py-4 rounded-lg shadow-lg transition
      ${type === "success" ? "bg-green-600" : "bg-red-600"}`}
    >
      <p className="text-white font-semibold">{message}</p>
    </div>
  );
}
