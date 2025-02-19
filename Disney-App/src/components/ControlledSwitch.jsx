import * as React from 'react';
import Switch from '@mui/material/Switch';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';


export default function ControlledSwitch() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    toggleDarkMode()
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