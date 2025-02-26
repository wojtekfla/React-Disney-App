import * as React from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ControlledSwitch() {
	const { toggleTheme } = useContext(ThemeContext);
	const [checked, setChecked] = React.useState(false);

	const handleChange = (event) => {
		setChecked(event.target.checked);
		toggleTheme();
	};

	return (
		<FormControlLabel
			control={
				<Switch
					checked={checked}
					onChange={handleChange}
					inputProps={{ "aria-label": "controlled" }}
				/>
			}
			label="dark mode"
      
		/>
	);
}
