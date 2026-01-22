// Styles
export const styles = {
    container: {
        position: "fixed" as const,
        zIndex: 9999,
        display: "flex" as const,
        flexDirection: "column" as const,
        gap: "10px",
        maxWidth: "420px",
        width: "100%",
        padding: "0 20px",
        pointerEvents: "none" as const,
    },
    toast: {
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        pointerEvents: "auto" as const,
        transition: "all 0.3s ease",
        // minHeight: "60px",
    },
    toastEnter: {
        animation: "slideIn 0.3s ease",
    },
    toastExit: {
        opacity: 0,
        transform: "translateX(100%)",
    },
    toastSuccess: {
        borderLeft: "4px solid #10b981",
    },
    toastError: {
        borderLeft: "4px solid #ef4444",
    },
    toastWarning: {
        borderLeft: "4px solid #f59e0b",
    },
    toastInfo: {
        borderLeft: "4px solid #3b82f6",
    },
    toastContent: {
        display: "flex" as const,
        alignItems: "flex-start" as const,
        gap: "12px",
    },
    customToastContent: {
        display: "flex" as const,
        gap: "12px",
        alignItems: "flex-start" as const,
    },
    toastIcon: {
        display: "flex" as const,
        alignItems: "center" as const,
        justifyContent: "center" as const,
        flexShrink: 0,
        marginTop: "2px",
    },
    toastMessage: {
        flex: 1,
        minWidth: 0,
    },
    toastTitle: {
        fontSize: "14px",
        fontWeight: "500",
        color: "#111827",
        lineHeight: "20px",
    },
    toastDescription: {
        fontSize: "13px",
        color: "#6b7280",
        marginTop: "4px",
        lineHeight: "18px",
    },
    actionButton: {
        background: "transparent",
        border: "1px solid #e5e7eb",
        borderRadius: "6px",
        padding: "6px 12px",
        fontSize: "13px",
        fontWeight: "500" as const,
        color: "#111827",
        cursor: "pointer" as const,
        transition: "all 0.2s",
        flexShrink: 0,
    },
    closeButton: {
        background: "transparent",
        border: "none",
        color: "#9ca3af",
        cursor: "pointer" as const,
        padding: "0",
        width: "24px",
        height: "24px",
        display: "flex" as const,
        alignItems: "center" as const,
        justifyContent: "center" as const,
        borderRadius: "4px",
        transition: "all 0.2s",
        flexShrink: 0,
    },
};

// Add keyframe animation
export const styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(100%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    button:hover {
      opacity: 0.8;
    }
  `;
document.head.appendChild(styleSheet);
