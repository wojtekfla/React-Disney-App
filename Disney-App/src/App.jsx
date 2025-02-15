import { useState } from "react";

import "./App.css";
import { AppBar } from "./components/AppBar";
import { CardList } from "./components/CardList";
import { Footer } from "./components/Footer";
import { StyledContainer } from "./components/styled/StyledContainer";

function App() {
	return (
		<>
			<StyledContainer>
				<AppBar />
				<CardList />
				<Footer />
			</StyledContainer>
		</>
	);
}

export default App;
