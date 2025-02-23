import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

const ModalWrapper = styled.div`
  width: 700px;
  max-width: 95%;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Header = styled.div`
  text-align: center;
`;

const CharacterImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.border};
`;

const CharacterName = styled.h2`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Section = styled.div`
  background-color: ${({ theme }) => theme.sectionBackground};
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-height: 250px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollbar};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.scrollbarHover};
  }
`;

const SectionTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
`;

const Item = styled.div`
  background-color: ${({ theme }) => theme.itemBackground};
  padding: 0.5rem;
  border-radius: 6px;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
`;

const Placeholder = styled.div`
  color: ${({ theme }) => theme.placeholder};
  text-align: center;
  font-style: italic;
`;

const lightTheme = {
  background: '#ffffff',
  text: '#333333',
  border: '#dddddd',
  sectionBackground: '#f9f9f9',
  itemBackground: '#e0e0e0',
  scrollbar: '#bbb',
  scrollbarHover: '#888',
  placeholder: '#999999'
};

const darkTheme = {
  background: '#2b2b2b',
  text: '#ffffff',
  border: '#444444',
  sectionBackground: '#3c3c3c',
  itemBackground: '#4d4d4d',
  scrollbar: '#555555',
  scrollbarHover: '#777777',
  placeholder: '#aaaaaa'
};

export default function CharacterModal({ characterImage, characterName, movies, games, shorts, tvShows }) {
  const { darkTheme: isDarkTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <ModalWrapper>
        <Header>
          <CharacterImage src={characterImage} alt={characterName} />
          <CharacterName>{characterName}</CharacterName>
        </Header>

        <ContentWrapper>
          <Column>
            <Section>
              <SectionTitle>🎬 Filmy</SectionTitle>
              {movies.length > 0 ? (
                movies.map((movie) => <Item key={movie.id}>{movie.title}</Item>)
              ) : (
                <Placeholder>Brak filmów</Placeholder>
              )}
            </Section>

            <Section>
              <SectionTitle>🎮 Gry</SectionTitle>
              {games.length > 0 ? (
                games.map((game) => <Item key={game.id}>{game.title}</Item>)
              ) : (
                <Placeholder>Brak gier</Placeholder>
              )}
            </Section>
          </Column>

          <Column>
            <Section>
              <SectionTitle>📺 TV Shows</SectionTitle>
              {tvShows.length > 0 ? (
                tvShows.map((show) => <Item key={show.id}>{show.title}</Item>)
              ) : (
                <Placeholder>Brak seriali</Placeholder>
              )}
            </Section>

            <Section>
              <SectionTitle>🎞️ Short Filmy</SectionTitle>
              {shorts.length > 0 ? (
                shorts.map((short) => <Item key={short.id}>{short.title}</Item>)
              ) : (
                <Placeholder>Brak short filmów</Placeholder>
              )}
            </Section>
          </Column>
        </ContentWrapper>
      </ModalWrapper>
    </ThemeProvider>
  );
}
