# Tiny Toast Message

A lightweight, type-safe toast notification system for React applications.

## Features

- 🎨 Beautiful pre-designed toast variants (success, error, warning, info)
- 🎯 Full TypeScript support with type safety
- ⚡ Zero dependencies (except React)
- 🎨 No CSS required - works with inline styles
- 🔧 Fully customizable with custom elements
- 📱 Responsive and mobile-friendly
- ♿ Accessible with ARIA labels
- 🪶 Lightweight (~5KB gzipped)

## Installation

```bash
npm install tiny-toast-message
# or
yarn add tiny-toast-message
# or
pnpm add tiny-toast-message
```

## Usage

### 1. Wrap your app with ToastProvider

```tsx
import { ToastProvider } from "tiny-toast-message";

function App() {
  return (
    <ToastProvider>
      <YourApp />
    </ToastProvider>
  );
}
```

### 2. Use the useToast hook

```tsx
import { useToast } from "tiny-toast-message";

function MyComponent() {
  const toast = useToast();

  return (
    <button onClick={() => toast.success("Saved successfully!")}>Save</button>
  );
}
```

## API

### Toast Methods

```tsx
const toast = useToast();

// Basic toasts
toast.success("Success message");
toast.error("Error message");
toast.warning("Warning message");
toast.info("Info message");
toast.addToast("Default message");

// With options
toast.success("Saved!", {
  description: "Your changes have been saved",
  duration: 5000,
  action: "Undo",
  onAction: () => console.log("Undo clicked"),
});

// Custom element
toast.custom(
  <div>
    <h3>Custom Toast</h3>
    <p>Any React element works here!</p>
  </div>,
  { duration: 5000 }
);

// Persistent toast (manual close only)
toast.info("Important message", { duration: Infinity });
```

### ToastOptions

```typescript
interface ToastOptions {
  type?: "success" | "error" | "warning" | "info" | "default";
  duration?: number; // milliseconds, or Infinity
  action?: string; // action button label
  onAction?: () => void; // action button callback
  description?: string; // secondary text
  customElement?: ReactNode; // for custom toasts
}
```

## Examples

### With Description

```tsx
toast.success("Upload complete", {
  description: "Your file has been uploaded to the server",
});
```

### With Action Button

```tsx
toast.info("Item deleted", {
  action: "Undo",
  onAction: () => restoreItem(),
});
```

### Custom Toast

```tsx
toast.custom(
  <div style={{ display: "flex", gap: "12px" }}>
    <img src="avatar.jpg" style={{ width: "40px", borderRadius: "50%" }} />
    <div>
      <strong>New Message</strong>
      <p>You have a new message from John</p>
    </div>
  </div>
);
```

## License

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/kazi331/tiny-toast-message.git"
  },
  "bugs": {
    "url": "https://github.com/kazi331/tiny-toast-message/issues"
  },
  "homepage": "https://github.com/kazi331/tiny-toast-message#readme",
  "author": {
    "name": "Kazi Shariful Islam",
    "email": "kazisharif.dev@gmail.com",
    "url": "https://kazi331.vercel.app"
  }
}
```
