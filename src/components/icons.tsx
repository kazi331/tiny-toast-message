import React from 'react';

export const Icons = {
    success: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" fill="#10b981" opacity="0.2" />
            <path
                d="M6 10L9 13L14 7"
                stroke="#10b981"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    error: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" fill="#ef4444" opacity="0.2" />
            <path
                d="M7 7L13 13M13 7L7 13"
                stroke="#ef4444"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    ),
    warning: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L18 17H2L10 2Z" fill="#f59e0b" opacity="0.2" />
            <path
                d="M10 7V11M10 14V14.5"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    ),
    info: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" fill="#3b82f6" opacity="0.2" />
            <path
                d="M10 10V14M10 7V7.5"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    ),
    close: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
                d="M4 4L12 12M12 4L4 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    ),
};