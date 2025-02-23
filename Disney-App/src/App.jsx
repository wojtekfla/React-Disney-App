import "./App.css";

import { useContext, useState } from "react";
import { AppBar } from "./components/AppBar";
import { CardList } from "./components/CardList";
import { Footer } from "./components/Footer";
import { StyledContainer } from "./components/styled/StyledContainer";
import { ThemeContext } from "./context/ThemeContext";

function App() {
	const { isDarkTheme, toggleTheme, currentTheme } = useContext(ThemeContext);
	console.log('in app theme', currentTheme)

	return (
		<>
			<StyledContainer $theme={currentTheme} >
				<AppBar />
				<CardList $theme={currentTheme}/>
				<Footer />
			</StyledContainer>
		</>
	);
}

export default App;
