import { createContext, useState } from "react";

const lightTheme = {
	bg1: '#f9f9f9',
	bg2: '#e7eaeb',
	bg3: '#7a95ff',
	
	color1: '#1b1f22',
	color2: '#38434f',
	color3: '#0b177e',
};

const darkTheme = {
	bg1: '#1b1f22',
	bg2: '#38434f',
	bg3: '#0b177e',
	
	color1: '#f9f9f9',
	color2: '#e7eaeb',
	color3: '#7a95ff',
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
// 	bg1: '#ffffff',
// 	bg2: '#f9f9f9',
// 	bg3: '#eef0f2',
// 	bg4: '#dadee1',
// 	color1: '#111520',
// 	color2: '#1b1f22',
// 	color3: '#222a30',
// 	color4: '#38434f',
// };


