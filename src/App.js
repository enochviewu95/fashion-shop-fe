import { Outlet } from "react-router-dom";
import { useState } from "react";
import AOS from "aos";
import { ThemeContext, themes } from "./context/themeContext";

import "aos/dist/aos.css";
import "./App.css";

function App() {
  const [theme] = useState(themes.light);
  AOS.init();

  return(
    <ThemeContext.Provider value={theme}>
      <Outlet />
    </ThemeContext.Provider>
  )
}

export default App;
