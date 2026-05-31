import { useEffect } from "react";
import "./Toast.css";

function Toast({ message, visible, onHide }) {
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(onHide, 2500);
    return () => clearTimeout(t);
  }, [visible, onHide]);

  if (!visible) return null;

  return (
    <div className="toast">
      <span className="toast__icon">✓</span>
      {message}
    </div>
  );
}

export default Toast;