import { Toast } from "../types";
interface ToastComponentProps {
    toast: Toast;
    onClose: () => void;
}
declare function ToastComponent({ toast, onClose }: ToastComponentProps): JSX.Element;
export default ToastComponent;
