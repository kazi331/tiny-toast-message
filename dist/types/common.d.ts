import { ReactNode } from "react";
export type ToastType = "success" | "error" | "warning" | "info" | "default" | "custom";
export interface ToastOptions {
    type?: ToastType;
    duration?: number;
    action?: string;
    onAction?: () => void;
    description?: string;
    customElement?: ReactNode;
}
export interface Toast {
    id: number;
    message: string | null;
    type: ToastType;
    duration: number;
    action?: string;
    onAction?: () => void;
    description?: string;
    customElement?: ReactNode;
}
export interface ToastContextValue {
    addToast: (message: string | null, options?: ToastOptions) => number;
    removeToast: (id: number) => void;
    success: (message: string, options?: Omit<ToastOptions, "type">) => number;
    error: (message: string, options?: Omit<ToastOptions, "type">) => number;
    warning: (message: string, options?: Omit<ToastOptions, "type">) => number;
    info: (message: string, options?: Omit<ToastOptions, "type">) => number;
    custom: (element: ReactNode, options?: Omit<ToastOptions, "type" | "customElement">) => number;
}
