import { createContext } from "react"

export const themes = {
    light: {
        primaryColor: "bg-[#84673D]",
        primaryTextColor: "text-gray-300",
        secondaryTextColor: "text-gray-100",
        deepBackground:"bg-[#d7cab6]",
        lightBackground:"bg-[#e7dfd3]",
        startBackground: "#d7cab6",
        stopBackground: "#84673D",
    }
}

export const ThemeContext = createContext(
    themes.light
)