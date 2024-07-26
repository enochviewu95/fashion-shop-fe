import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import { ThemeContext, themes } from "./context/themeContext";

import "./App.css";
import "aos/dist/aos.css";

function App() {
  const [theme] = useState(themes.light);
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh(); // Refresh AOS to detect new elements
  }, []);

  return(
    <ThemeContext.Provider value={theme}>
      <Outlet />
    </ThemeContext.Provider>
  )
}

export default App;
