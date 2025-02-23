import { createContext, useState } from "react";

const lightTheme = {
	bg1: '#ffffff',
	bg2: '#f9f9f9',
	bg3: '#eef0f2',
	bg4: '#dadee1',
	color1: '#111520',
	color2: '#1b1f22',
	color3: '#222a30',
	color4: '#38434f',
};

const darkTheme = {
	bg1: '#111520',
	bg2: '#1b1f22',
	bg3: '#222a30',
	bg4: '#38434f',
	color1: '#ffffff',
	color2: '#f9f9f9',
	color3: '#eef0f2',
	color4: '#dadee1',
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const toggleTheme = () => {
		console.log('toggle', currentTheme)
		setIsDarkTheme((prev) => !prev);
	};

	const currentTheme = isDarkTheme ? darkTheme : lightTheme

	return (
		<>
			<ThemeContext.Provider value={{ isDarkTheme, toggleTheme, currentTheme }}>
				{children}
			</ThemeContext.Provider>
		</>
	);
};


// const lightTheme = {
// 	background: '#ffffff',
// 	text: '#333333',
// 	border: '#dddddd',
// 	sectionBackground: '#f9f9f9',
// 	itemBackground: '#e0e0e0',
// 	scrollbar: '#ccbebe',
// 	// scrollbar: '#bbb',
// 	scrollbarHover: '#888',
// 	placeholder: '#999999'
// };


// const darkTheme = {
// 	background: '#2b2b2b',
// 	text: '#ffffff',
// 	border: '#444444',
// 	sectionBackground: '#3c3c3c',
// 	itemBackground: '#4d4d4d',
// 	scrollbar: '#fff',
// 	// scrollbar: '#555555',
// 	scrollbarHover: '#777777',
// 	placeholder: '#aaaaaa'
// };