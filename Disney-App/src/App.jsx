import { useContext, useState } from "react";

import "./App.css";
import { AppBar } from "./components/AppBar";
import { CardList } from "./components/CardList";
import { Footer } from "./components/Footer";
import { StyledContainer } from "./components/styled/StyledContainer";
import { DarkModeContext } from "./context/DarkModeContext";

function App() {
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

	return (
		<>
			<StyledContainer $darkMode={darkMode} >
				<AppBar />
				<CardList />
				<Footer />
			</StyledContainer>
		</>
	);
}

export default App;
