import * as React from 'react';
import Switch from '@mui/material/Switch';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


export default function ControlledSwitch() {
  const { isDarkTheme, toggleTheme, currentTheme } = useContext(ThemeContext);
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    console.log('in switch', currentTheme )
    setChecked(event.target.checked);
    toggleTheme()
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      label='Theme'
    />
  );
}

