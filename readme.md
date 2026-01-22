# Tiny Toast Message

A lightweight, dependency-free toast notification system for React applications.

## Features

* 🎨 Pre-built toast variants: **success, error, warning, info**
* ⚡ Global API – trigger toasts from anywhere
* 🧩 Supports **custom React elements**
* 🕒 Auto-dismiss or persistent toasts
* 📍 Configurable positions
* 🔢 Max toast count control
* 🎯 Full TypeScript support
* 🎨 No CSS required (inline styles)

---

## Installation

```bash
npm install tiny-toast-message
# or
yarn add tiny-toast-message
# or
pnpm add tiny-toast-message
```

---

## Basic Usage

### 1. Mount the `<Toaster />` once

Place the `Toaster` component **once** in your app (usually near the root).

```tsx
import { Toaster } from "tiny-toast-message";

function App() {
  return (
    <>
      <Toaster />
      {/* your app */}
    </>
  );
}

export default App;
```

---

### 2. Trigger toasts from anywhere

```tsx
import { toast } from "tiny-toast-message";

toast("Hello world");
```

No hooks. No providers. Just call `toast()`.

---

## Toast Variants

```tsx
toast.success("Saved successfully");
toast.error("Something went wrong");
toast.warning("Be careful");
toast.info("New update available");
```

---

## Toast Options

```ts
interface ToastOptions {
  type?: "success" | "error" | "warning" | "info" | "default";
  duration?: number;        // milliseconds or Infinity
  action?: string;          // action button label
  onAction?: () => void;    // action button handler
  description?: string;    // secondary text
}
```

---

## Examples

### With Description

```tsx
toast.success("Upload complete", {
  description: "Your file has been uploaded",
});
```

---

### With Action Button

```tsx
toast.info("Item deleted", {
  action: "Undo",
  onAction: () => restoreItem(),
});
```

---

### Persistent Toast (Manual Close)

```tsx
toast.warning("This requires attention", {
  duration: Infinity,
});
```

---

## Custom Toast (React Element)

```tsx
toast.custom(
  <div>
    <h4>Custom Content</h4>
    <p>Any React element works here</p>
  </div>,
  { duration: 5000 }
);
```

---

## Dismissing Toasts

### Dismiss a specific toast

```tsx
const id = toast("Temporary message");

toast.dismiss(id);
```

### Dismiss all toasts

```tsx
toast.dismiss();
```

---

## Toaster Configuration

```tsx
<Toaster
  position="bottom-right"
  duration={4000}
  maxCount={5}
/>
```

### Props

| Prop     | Type            | Default        | Description        |
| -------- | --------------- | -------------- | ------------------ |
| position | `ToastPosition` | `bottom-right` | Toast placement    |
| duration | `number`        | `3000`         | Default duration   |
| maxCount | `number`        | `5`            | Max visible toasts |

### Available Positions

```ts
type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";
```

---

## Notes

* The toast system uses a **single DOM portal** attached to `document.body`
* Toasts are **global**, no React context required
* Safe to call `toast()` from:

  * event handlers
  * async functions
  * non-React files

---

## License & Repository

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


