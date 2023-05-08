import { createContext } from "react"

export const themes = {
    light: {
        primaryBackground: "bg-[#84673D]",
        primaryTextColor: "text-gray-300",
        secondaryTextColor: "text-gray-100",
        deepBackground:"bg-[#d7cab6]",
        lightBackground:"bg-[#e7dfd3]",
        startBackground: "#F5F2ED",
        stopBackground: "#FF80B5",
        textInputBackground: "bg-[#f5f2ed]",
        buttonBackground: "bg-[#94784F]",
        buttonHoverBackground: "bg-[#A99511]",
        borderColor: "border-gray-500"
    }
}

export const ThemeContext = createContext(
    themes.light
)