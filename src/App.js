import  { useState, createContext } from 'react';
import './App.css';
import darkModeImage from '../src/assets/icon-moon.svg';
import lightModeImage from '../src/assets/icon-sun.svg';
import UserCard from './Components/UserCard';

export const DarkModeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className={isDarkMode ? 'dark-mode' : 'app-container'}>
        <header className="header">
          <h1>devfinder</h1>
          <div className="mode-toggle" onClick={toggleDarkMode}>
            <span>{isDarkMode ? 'LIGHT' : 'DARK'}</span>
            <img
              src={isDarkMode ? lightModeImage : darkModeImage}
              alt={isDarkMode ? 'Light Mode' : 'Dark Mode'}
              className="mode-image"
            />
          </div>
        </header>
        <UserCard />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;


// import React, { useState, createContext } from 'react';
// import SearchBar from './Components/SearchBar';
// import UserCard from './Components/UserCard';
// import './App.css';

// export const ThemeContext = createContext(null);
// function App() {
//   const [theme, setTheme] = useState('light');
//   const [userData, setUserData] = useState(null);

//   const toggleTheme = (value) => {
//     console.log('Current theme:', theme);
//     setTheme((prevTheme) => {
//       const newTheme = prevTheme === 'light' ? 'dark' : 'light';
//       console.log('Switching to:', newTheme);
//       return newTheme;
//   });

//   };
//   return (
//     <ThemeContext.Provider value={{theme,toggleTheme}} >
//     <div className='App'>
//       <header className="App-header">
//         <h1>devfinder</h1>
//         <button onClick={ThemeContext}>
//             {theme === 'light' ? 'DARK' : 'LIGHT'}MODE
//         </button>
//       </header>
//       <SearchBar setUserData={setUserData} />
//       {userData && <UserCard userData={userData} />}
//     </div>
//     </ThemeContext.Provider>
//   );
// }

// export default App;

