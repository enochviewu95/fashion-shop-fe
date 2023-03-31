import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import {ThemeContext, themes} from './themeContext'

import './App.css';

function App() {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider value={theme}>
      <Outlet />
    </ThemeContext.Provider>
  );
}

export default App;
