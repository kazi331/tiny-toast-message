import React, { CSSProperties, useEffect, useState } from "react";
import { Toast } from "../types";
import { Icons } from "./icons";
import styles from "./style";


interface ToastComponentProps {
    toast: Toast;
    onClose: () => void;
}

function ToastComponent({ toast, onClose }: ToastComponentProps): JSX.Element {
    const [isExiting, setIsExiting] = useState(false);

    const handleClose = (): void => {
        setIsExiting(true);
        setTimeout(onClose, 300);
    };

    const handleAction = (): void => {
        if (toast.onAction) {
            toast.onAction();
        }
        handleClose();
    };

    useEffect(() => {
        const timer = setTimeout(() => setIsExiting(false), 50);
        return () => clearTimeout(timer);
    }, []);

    const toastStyle: CSSProperties = {
        ...styles.toast,
        ...(isExiting ? styles.toastExit : styles.toastEnter),
        ...(toast.type !== 'default' && toast.type !== 'custom' && styles[`toast${toast.type.charAt(0).toUpperCase()}${toast.type.slice(1)}` as keyof typeof styles])
    };

    // Custom element rendering
    if (toast.customElement) {
        return (
            <div style={toastStyle}>
                <div style={styles.customToastContent}>
                    {toast.customElement}
                    <button style={styles.closeButton} onClick={handleClose} aria-label="Close">
                        {Icons.close}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div style={toastStyle}>
            <div style={styles.toastContent}>
                {toast.type !== 'default' && Icons[toast.type as keyof typeof Icons] && (
                    <span style={styles.toastIcon}>{Icons[toast.type as keyof typeof Icons]}</span>
                )}
                <div style={styles.toastMessage}>
                    <div style={styles.toastTitle}>{toast.message}</div>
                    {toast.description && (
                        <div style={styles.toastDescription}>{toast.description}</div>
                    )}
                </div>
                {toast.action && (
                    <button style={styles.actionButton} onClick={handleAction}>
                        {toast.action}
                    </button>
                )}
                <button style={styles.closeButton} onClick={handleClose} aria-label="Close">
                    {Icons.close}
                </button>
            </div>
        </div>
    );
}
export default ToastComponent;