import { Outlet } from "react-router-dom";
import { useState } from "react";
import AOS from "aos";
import { ThemeContext, themes } from "./context/themeContext";
import LoadingComponent from "./components/widgets/LoadingComponent";

import "aos/dist/aos.css";
import "./App.css";
import { useAuth } from "./context/auth";

function App() {
  const [theme] = useState(themes.light);
  const auth = useAuth();
  AOS.init();

  return auth !== null ? (
    <ThemeContext.Provider value={theme}>
      <Outlet />
    </ThemeContext.Provider>
  ) : (
    <LoadingComponent isLoading={true} />
  );
}

export default App;
