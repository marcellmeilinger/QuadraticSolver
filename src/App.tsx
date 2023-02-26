import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Solver } from './Components/Solver'
import { Helmet } from 'react-helmet';

export const ThemeContext = createContext(null);

let iconSrc = "icons8-sun.svg"
function App() {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
      document.body.style.backgroundColor = "rgb(240 248 255)";
      iconSrc = "dark-mode-6682.svg";
    }
    else {
      setTheme("dark");
      document.body.style.backgroundColor = "rgb(36 36 36)";
      iconSrc = "icons8-sun.svg"
    }

  };

  return (

    <ThemeContext.Provider value={null} >
      <div className='App' id={theme}>
        <Solver />
      </div>
      <div>
        <img id='icon' className='sun' onClick={toggleTheme} src={iconSrc} alt="" />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
