// import "./Modal.css";

import {
	ModalWrapper,
	Header,
	CharacterImage,
	CharacterName,
	ContentWrapper,
	Column,
	Section,
	SectionTitle,
	Item,
	Placeholder,
	Overlay,
} from "../styled/StyledModal";

import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function Modal({ onClose, item }) {
	const { isDarkTheme, toggleTheme, currentTheme } = useContext(ThemeContext);

	const { imageUrl, name, films, shortFilms, videoGames, tvShows } = item;

	const stylesImg = {
		width: "220px",
		height: "220px",
		overflow: "hidden",
		borderRadius: "50%",
	};

	const MODAL_STYLES = {
		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		zIndex: "100",
	};

	return (
		<div>
			<Overlay onClick={onClose} />
			<ModalWrapper theme={currentTheme} >
				
				<Header>
					<CharacterImage src={imageUrl} alt={name} theme={currentTheme} />
					<CharacterName>{name}</CharacterName>
				</Header>

				<ContentWrapper>
					<Column>
						<Section>
							<SectionTitle>🎬 Movies</SectionTitle>
							{films.length > 0 ? (
								films.map((movie) => <Item key={movie._id}>{movie}</Item>)
							) : (
								<Placeholder>Brak filmów</Placeholder>
							)}
						</Section>
						<Section>
							<SectionTitle>📺 TV Shows</SectionTitle>
							{tvShows.length > 0 ? (
								tvShows.map((show) => <Item key={show._id}>{show}</Item>)
							) : (
								<Placeholder>Brak seriali</Placeholder>
							)}
						</Section>
					</Column>

					<Column>
						<Section>
							<SectionTitle>🎮 Games</SectionTitle>
							{videoGames.length > 0 ? (
								videoGames.map((game) => (
									<Item key={game._id}>{videoGames}</Item>
								))
							) : (
								<Placeholder>Brak gier</Placeholder>
							)}
						</Section>
						<Section>
							<SectionTitle>🎞️ Short Filmy</SectionTitle>
							{shortFilms.length > 0 ? (
								shortFilms.map((short) => (
									<Item key={short._id}>{shortFilms}</Item>
								))
							) : (
								<Placeholder>Brak short filmów</Placeholder>
							)}
						</Section>
					</Column>
				</ContentWrapper>
			</ModalWrapper>
		</div>
	);
}

{
	/* <div className='modal'>
      <img src={imageUrl} style={stylesImg} />
      <div>{name}</div>
      <div>
      
      </div>
      <br/>
      <button onClick={onClose}>Zamknij</button>
    </div> */
}
