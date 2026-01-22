import { ReactNode } from "react";

export type ToastType =
  | "success"
  | "error"
  | "warning"
  | "info"
  | "default"
  | "custom";

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

export type ToastPosition = 
  | "top-left" 
  | "top-center" 
  | "top-right" 
  | "bottom-left" 
  | "bottom-center" 
  | "bottom-right";

export type ToastListener = (toasts: Toast[]) => void;