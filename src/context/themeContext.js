import { createContext } from "react"

export const themes = {
  light: {
    primaryBackground: "bg-[#84673D]",
    primaryTextColor: "text-gray-300",
    secondaryTextColor: "text-gray-100",
    deepBackground: "bg-[#d7cab6]",
    lightBackground: "bg-[#e7dfd3]",
    startBackground: "#F5F2ED",
    stopBackground: "#FF80B5",
    tableBackground: "bg-gray-50",
    textInputBackground: "bg-[#f5f2ed]",
    buttonBackground: "bg-yellow-700",
    buttonHoverBackground: "bg-yellow-900",
    borderColor: "border-gray-500",
  },
};

export const ThemeContext = createContext(
    themes.light
)