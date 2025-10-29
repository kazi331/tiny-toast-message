import React from "react";
import { Toast } from "../types";
import styles from "./style";
import ToastComponent from "./toast";


interface ToastContainerProps {
    toasts: Toast[];
    removeToast: (id: number) => void;
}

function ToastContainer({ toasts, removeToast }: ToastContainerProps): JSX.Element {
    return (
        <div style={styles.container}>
            {toasts.map(toast => (
                <ToastComponent key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
            ))}
        </div>
    );
}

export default ToastContainer;