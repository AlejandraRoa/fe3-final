import  { createContext, useState } from 'react';
import PropTypes from 'prop-types';


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); 

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ state: { theme }, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Validación de los props
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
