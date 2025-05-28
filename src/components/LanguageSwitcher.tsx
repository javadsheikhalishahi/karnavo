'use client';

import { useI18n } from "@/lib/i18n";
import { useState } from "react";

export const LanguageSwitcher = () => {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "fa", label: "فارسی" },
  ];

  const toggleDropdown = () => setOpen(!open);

  const onSelect = (code: "en" | "fa") => {
    setLocale(code);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={toggleDropdown}
        className="inline-flex items-center justify-center w-full rounded-xl border border-gray-300 glassmorphism px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-cyan-500"
      >
        🌐 {languages.find((l) => l.code === locale)?.label}
        <svg
          className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          {languages.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => onSelect(code as "en" | "fa")}
              className={`block w-full px-4 py-1 md:py-2 text-left text-sm rounded-sm ${
                locale === code ? "bg-indigo-600 text-white" : "text-gray-700 hover:bg-indigo-100 hover:rounded-md"
              }`}
              role="menuitem"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
