import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Navbar() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <nav className="fixed w-full flex justify-between px-8 py-4 bg-white dark:bg-black z-50">
      <h1 className="font-bold text-xl dark:text-white">Engr.BasitJan👨‍💻</h1>

      <button
        onClick={() => setDark(!dark)}
        className="px-4 py-2 border rounded dark:text-white"
      >
        {dark ? "☀ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}