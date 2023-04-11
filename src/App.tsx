import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Solver } from './Components/Solver'
import { Helmet } from 'react-helmet';
import { SolverGlass } from './Components/SolverGlass';

export const ThemeContext = createContext(null);

let iconSrc = "icons8-sun.svg"
function App() {
  const [theme, setTheme] = useState("");
  const [isModeGlass, setIsModeGlass] = useState(true);

  function handleModeSwitch() {
    isModeGlass ? setIsModeGlass(false) : setIsModeGlass(true);
  }

  function toggleTheme() {
    if (theme === "dark" || theme === "") {
      setTheme("light");
      document.body.classList.remove('bodydark')
      document.body.classList.add('bodylight');
      iconSrc = "dark-mode-6682.svg";
    }
    else {
      setTheme("dark");
      document.body.classList.remove('bodylight')
      document.body.classList.add('bodydark');
      iconSrc = "icons8-sun.svg"
    }

  };

  if (isModeGlass) {
    return (
      <section className='container'>
        <p onClick={handleModeSwitch}>Glassmode</p>
        <div className='App' >
          <SolverGlass />
        </div>
      </section>
    )
  }
  else {
    return (
      <section className='container'>
        <p onClick={handleModeSwitch}>Glassmode</p>
        <ThemeContext.Provider value={null} >
          <div className='App' id={theme}>
            <Solver />
          </div>
          <div>
            <img id='icon' className='sun' onClick={toggleTheme} src={iconSrc} alt="" />
          </div>
        </ThemeContext.Provider>
      </section>
    )
  }
}

export default App
