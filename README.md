# ToggleButton Component

A simple and customizable toggle button component built with React and TypeScript. Supports dynamic values, styling via Tailwind CSS, and seamless state management.

## 🚀 Installation

Install the package via npm:

```sh
npm install custom-toggle-button1
```

Or with yarn:

```sh
yarn add custom-toggle-button1
```

## 📌 Usage

Import and use the `ToggleButton` component in your React project:

```tsx
import ToggleButton from "toggle-button";
import { useState } from "react";

export default function App() {
  const [selected, setSelected] = useState("option1");

  return (
    <div className="p-5">
      <ToggleButton
        values=[
          { name: "Option 1", value: "option1" },
          { name: "Option 2", value: "option2" }
        ]
        value={selected}
        onChange={setSelected}
        w={50} // Width of each toggle item
        h={30} // Height of each toggle item
      />
    </div>
  );
}
```

## 🎨 Props

| Prop          | Type                           | Default | Description                                      |
|--------------|--------------------------------|---------|--------------------------------------------------|
| `values`     | `{ name: string, value: string | number }[]` | -       | List of toggle options.                          |
| `defaultValue` | `string | number`            | -       | The default selected value.                      |
| `value`      | `string | number`             | -       | The currently selected value.                    |
| `onChange`   | `(value: string | number) => void` | -       | Callback function triggered on toggle change.    |
| `w`          | `number`                       | `35`    | Width of each toggle button (in px).            |
| `h`          | `number`                       | `25`    | Height of each toggle button (in px).           |

## 🎯 Features

✅ **Lightweight** – Minimal dependencies.
✅ **Customizable** – Supports dynamic width, height, and styles.
✅ **Tailwind CSS Support** – Easily style with Tailwind classes.
✅ **TypeScript Support** – Fully typed for better developer experience.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by Rohan Thomas Reji.

