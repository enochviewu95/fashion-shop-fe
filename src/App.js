import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ThemeContext, themes } from "./context/themeContext";
import LoadingComponent from "./components/widgets/LoadingComponent";

import "./App.css";
import { useAuth } from "./context/auth";

function App() {
  const [theme] = useState(themes.light);
  const auth = useAuth();
  return auth !== null ? (
    <ThemeContext.Provider value={theme}>
      <Outlet />
    </ThemeContext.Provider>
  ) : (
    <LoadingComponent isLoading={true} />
  );
}

export default App;
