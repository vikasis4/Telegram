import React from 'react';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className="absolute bottom-4 right-4">
      <IconButton onClick={toggleDarkMode} color="inherit">
        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </div>
  );
};

export default DarkModeToggle;
