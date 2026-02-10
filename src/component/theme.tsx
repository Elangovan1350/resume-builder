"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useResumeStore } from "./store";

const Theme = () => {
  const { theme, setTheme } = useResumeStore();
  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <button
      onClick={handleTheme}
      type="button"
      className={`fixed top-4 left-4 z-50 px-4 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 flex items-center gap-2 font-medium touch-manipulation select-none ${
        theme
          ? "bg-gray-800 text-yellow-400 hover:bg-gray-900 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]"
          : "bg-purple-500 text-white hover:bg-purple-600 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
      }`}
    >
      {theme ? (
        <>
          <MoonIcon className="w-5 h-5" />
          <span className="text-sm">Dark{window.innerWidth}</span>
        </>
      ) : (
        <>
          <SunIcon className="w-5 h-5" />
          <span className="text-sm">Light{window.innerWidth}</span>
        </>
      )}
    </button>
  );
};

export default Theme;
