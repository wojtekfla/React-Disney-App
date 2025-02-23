
// export function CharacterModal({ onClose, item }) {


// 	const { imageUrl, name, films, shortFilms, videoGames, tvShows } = item;

// 	console.log("item", item);

// 	return (
// 		<StyledModal>
// 			{/* Lewa kolumna */}
// 			<Column>
// 				<Section>
// 					<SectionTitle>🎬 Movies</SectionTitle>

// 					{films.length > 0 ? (
// 						films.map((movie) => <Item key={movie.id}>{movie}</Item>)
// 					) : (
// 						<Placeholder>No movies</Placeholder>
// 					)}
// 				</Section>
// 				<Section>
// 					<SectionTitle>🎮 Gry</SectionTitle>
// 					{videoGames.length > 0 ? (
// 						videoGames.map((game) => <Item key={game.id}>{game}</Item>)
// 					) : (
// 						<Placeholder>Brak gier</Placeholder>
// 					)}
// 				</Section>
// 			</Column>

// 			{/* Prawa kolumna */}
//       <Column>
//         <Section>
//           <SectionTitle>📺 TV Shows</SectionTitle>
//           {tvShows.length > 0 ? (
//             tvShows.map((show) => <Item key={show.id}>{show.title}</Item>)
//           ) : (
//             <Placeholder>Brak seriali</Placeholder>
//           )}
//         </Section>

//         <Section>
//           <SectionTitle>🎞️ Short Filmy</SectionTitle>
//           {shortFilms.length > 0 ? (
//             shortFilms.map((short) => <Item key={short.id}>{short.title}</Item>)
//           ) : (
//             <Placeholder>Brak short filmów</Placeholder>
//           )}
//         </Section>
//       </Column>

// 			<br />
// 			<button onClick={onClose}>Zamknij</button>
// 		</StyledModal>
// 	);
// }
