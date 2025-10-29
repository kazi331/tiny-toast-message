import { Toast } from "../types/common";
interface ToastContainerProps {
    toasts: Toast[];
    removeToast: (id: number) => void;
}
declare function ToastContainer({ toasts, removeToast }: ToastContainerProps): JSX.Element;
export default ToastContainer;
