import { ReactNode } from "react";
import { ToastContextValue } from "../types/common";
interface ToastProviderProps {
    children: ReactNode;
}
export declare function ToastProvider({ children }: ToastProviderProps): JSX.Element;
export declare function useToast(): ToastContextValue;
export {};
