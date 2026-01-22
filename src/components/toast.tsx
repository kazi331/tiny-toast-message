import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ToastListener, ToastOptions, ToastPosition, type Toast } from "../types";
import { Icons } from "./icons";
import { styles } from "./style";

// Toast state management (outside React)
let toastListeners: ToastListener[] = [];
let toastId = 0;
let defaultDuration = 3000;

function notifyListeners(toasts: Toast[]) {
  toastListeners.forEach((listener) => listener(toasts));
}

let toastsState: Toast[] = [];

function addToastToState(toast: Toast) {
  toastsState = [...toastsState, toast];
  notifyListeners(toastsState);

  if (toast.duration !== Infinity) {
    setTimeout(() => {
      removeToastFromState(toast.id);
    }, toast.duration);
  }

  return toast.id;
}

function removeToastFromState(id: number) {
  toastsState = toastsState.filter((t) => t.id !== id);
  notifyListeners(toastsState);
}

// Toast API (call from anywhere)
export const toast = (message: string, options: ToastOptions = {}) => {
  const id = ++toastId;
  const newToast = {
    id,
    message,
    type: options.type || "default",
    duration: options.duration ?? defaultDuration,
    action: options.action,
    onAction: options.onAction,
    description: options.description,
  };

  return addToastToState(newToast);
};

toast.success = (message: string, options: ToastOptions = {}) => {
  return toast(message, { ...options, type: "success" });
};

toast.error = (message: string, options: ToastOptions = {}) => {
  return toast(message, { ...options, type: "error" });
};

toast.warning = (message: string, options: ToastOptions = {}) => {
  return toast(message, { ...options, type: "warning" });
};

toast.info = (message: string, options: ToastOptions = {}) => {
  return toast(message, { ...options, type: "info" });
};

toast.custom = (element: ReactNode, options: ToastOptions = {}) => {
  const id = ++toastId;
  const newToast: Toast = {
    id,
    message: null,
    type: "custom" as const,
    duration: options.duration ?? defaultDuration,
    customElement: element,
  };

  return addToastToState(newToast);
};

toast.dismiss = (id?: number) => {
  if (id) {
    removeToastFromState(id);
  } else {
    toastsState = [];
    notifyListeners(toastsState);
  }
};

// Create a dedicated container for toasts at the end of body
let toastContainer: HTMLDivElement | null = null;

function getToastContainer(): HTMLDivElement {
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container-root";
    toastContainer.style.cssText = "position: relative; z-index: 9999;";
    document.body.appendChild(toastContainer);
  }
  return toastContainer;
}

// Toaster Component (add once to your app)
export function Toaster({ position = "bottom-right", duration, maxCount = 5 }: { position?: ToastPosition, duration?: number, maxCount?: number }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (duration) {
      defaultDuration = duration;
    }
  }, [duration]);

  useEffect(() => {
    // Get or create the container
    setContainer(getToastContainer());

    const listener: ToastListener = (newToasts: Toast[]) => {
      setToasts(newToasts);
    };

    toastListeners.push(listener);

    return () => {
      toastListeners = toastListeners.filter((l) => l !== listener);
    };
  }, []);

  const positionStyles: Record<ToastPosition, React.CSSProperties> = {
    "top-left": { top: "20px", left: "20px" },
    "top-center": { top: "20px", left: "50%", transform: "translateX(-50%)" },
    "top-right": { top: "10px", right: "20px" },
    "bottom-left": { bottom: "20px", left: "20px" },
    "bottom-center": {
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
    },
    "bottom-right": { bottom: "20px", right: "10px" },
  };
console.log(toasts.length)
  if (!container) return null;

  return createPortal(
    <div style={{ ...styles.container, ...positionStyles[position] }}>
      {toasts.reverse().slice(0, maxCount).map((toastItem) => (
        <Toast
          key={toastItem.id}
          toast={toastItem}
          duration={duration}
          onClose={() => removeToastFromState(toastItem.id)}
        />
      ))}
    </div>,
    container
  );
}

// Individual Toast Component
function Toast({ toast: toastData, onClose, duration }: { toast: Toast, onClose: () => void, duration?: number }) {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(onClose, duration);
  };

  const handleAction = () => {
    if (toastData.onAction) {
      toastData.onAction();
    }
    handleClose();
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsExiting(false), 50);
    return () => clearTimeout(timer);
  }, []);

  const getTypeStyle = () => {
    switch (toastData.type) {
      case "success":
        return styles.toastSuccess;
      case "error":
        return styles.toastError;
      case "warning":
        return styles.toastWarning;
      case "info":
        return styles.toastInfo;
      default:
        return {};
    }
  };

  const toastStyle = {
    ...styles.toast,
    ...(isExiting ? styles.toastExit : styles.toastEnter),
    ...(toastData.type !== "default" && toastData.type !== "custom" && getTypeStyle()),
  };

  // Custom element rendering
  if (toastData.customElement) {
    return (
      <div style={toastStyle}>
        <div style={styles.customToastContent}>
          {toastData.customElement}
          <button style={styles.closeButton} onClick={handleClose}>
            {Icons.close}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={toastStyle}>
      <div style={styles.toastContent}>
        {toastData.type !== "default" && toastData.type !== "custom" && (
          <span style={styles.toastIcon}>
            {toastData.type === "success" && Icons.success}
            {toastData.type === "error" && Icons.error}
            {toastData.type === "warning" && Icons.warning}
            {toastData.type === "info" && Icons.info}
          </span>
        )}
        <div style={styles.toastMessage}>
          <div style={styles.toastTitle}>{toastData.message}</div>
          {toastData.description && (
            <div style={styles.toastDescription}>{toastData.description}</div>
          )}
        </div>
        {toastData.action && (
          <button style={styles.actionButton} onClick={handleAction}>
            {toastData.action}
          </button>
        )}
        <button style={styles.closeButton} onClick={handleClose}>
          {Icons.close}
        </button>
      </div>
    </div>
  );
}

