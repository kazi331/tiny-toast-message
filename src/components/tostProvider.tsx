import React, { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { Toast, ToastContextValue, ToastOptions } from "../types/common";
import ToastContainer from "./toastContainer";



const ToastContext = createContext<ToastContextValue | null>(null);

interface ToastProviderProps {
    children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps): JSX.Element {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = useCallback((message: string | null, options: ToastOptions = {}): number => {
        const id = Date.now() + Math.random();
        const toast: Toast = {
            id,
            message,
            type: options.type || 'default',
            duration: options.duration !== undefined ? options.duration : 3000,
            action: options.action,
            onAction: options.onAction,
            description: options.description,
            customElement: options.customElement
        };

        setToasts(prev => [...prev, toast]);

        if (toast.duration !== Infinity) {
            setTimeout(() => {
                removeToast(id);
            }, toast.duration);
        }

        return id;
    }, []);

    const removeToast = useCallback((id: number): void => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);

    const success = useCallback((message: string, options?: Omit<ToastOptions, 'type'>): number => {
        return addToast(message, { ...options, type: 'success' });
    }, [addToast]);

    const error = useCallback((message: string, options?: Omit<ToastOptions, 'type'>): number => {
        return addToast(message, { ...options, type: 'error' });
    }, [addToast]);

    const warning = useCallback((message: string, options?: Omit<ToastOptions, 'type'>): number => {
        return addToast(message, { ...options, type: 'warning' });
    }, [addToast]);

    const info = useCallback((message: string, options?: Omit<ToastOptions, 'type'>): number => {
        return addToast(message, { ...options, type: 'info' });
    }, [addToast]);

    const custom = useCallback((element: ReactNode, options: Omit<ToastOptions, 'type' | 'customElement'> = {}): number => {
        return addToast(null, { ...options, customElement: element, type: 'custom' });
    }, [addToast]);

    const value: ToastContextValue = {
        addToast,
        removeToast,
        success,
        error,
        warning,
        info,
        custom
    };

    return (
        <ToastContext.Provider value={value}>
            {children}
            <ToastContainer toasts={toasts} removeToast={removeToast} />
        </ToastContext.Provider>
    );
}

// ========================================

// useToast.ts
export function useToast(): ToastContextValue {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within ToastProvider');
    }
    return context;
}
