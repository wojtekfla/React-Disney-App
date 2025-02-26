import { useContext } from "react";
import { AppBar } from "./components/AppBar";
import { CardList } from "./components/CardList";
import { StyledContainer } from "./components/styled/StyledContainer";
import { ThemeContext } from "./context/ThemeContext";

function App() {
	const { currentTheme } = useContext(ThemeContext);

	return (
		<>
			<StyledContainer theme={currentTheme}>
				<AppBar />
				<CardList />
			</StyledContainer>
		</>
	);
}

export default App;