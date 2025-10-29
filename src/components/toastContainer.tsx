import React from "react";
import styles from "./style";
import ToastComponent from "./toast";
import { Toast } from "../types/common";


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