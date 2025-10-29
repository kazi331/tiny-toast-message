import { Toast } from "../types";
interface ToastContainerProps {
    toasts: Toast[];
    removeToast: (id: number) => void;
}
declare function ToastContainer({ toasts, removeToast }: ToastContainerProps): JSX.Element;
export default ToastContainer;
