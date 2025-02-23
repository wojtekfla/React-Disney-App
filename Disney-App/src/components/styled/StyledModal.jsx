import styled from "styled-components";

export const ModalWrapper = styled.div`
	position: fixed;
	max-height: 90%;
	left: 25vw;
	right: 25vw;
	top: 10vh;
	bottom: 10vh;
	padding: 1rem;
	// background-color: ${({ theme }) => theme.background};
	background-color: #bbb;
	color: ${({ theme }) => theme.text};
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	z-index: 11;

	/* @media (max-width: 600px) {
    flex-direction: column;
  } */
`;

export const Header = styled.div`
	text-align: center;
`;
export const CharacterImage = styled.img`
	width: 120px;
	height: 120px;
	border-radius: 50%;
	object-fit: cover;
	border: 2px solid ${({ theme }) => theme.border};
`;

export const CharacterName = styled.h2`
	margin-top: 0.75rem;
	font-size: 2rem;
	color: ${({ theme }) => theme.text};
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-width: 250px;
	min-height: 400px;

	gap: 1rem;
`;

export const Section = styled.div`
	background-color: ${({ theme }) => theme.sectionBackground};
	border-radius: 5px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
	max-height: 260px;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 5px;
		background-color: ${({ theme }) => theme.scrollbar};
	}
`

export const SectionTitle = styled.h3`
	margin: 0 0 0.5rem 0;
	font-size: 1.2rem;
	color: ${({ theme }) => theme.text};
`;

export const Item = styled.div`
	background-color: ${({ theme }) => theme.itemBackground};
	color: ${({ theme }) => theme.text};
	padding: 0.15rem;
	font-size: 0.9rem;
`;

export const Placeholder = styled.div`
	color: ${({ theme }) => theme.placeholder};
	text-align: center;
	font-style: italic;
`;

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	z-index: 10;
`;

export const lightTheme = {
	background: "#ffffff",
	text: "#333333",
	border: "#dddddd",
	sectionBackground: "#f9f9f9",
	itemBackground: "#e0e0e0",
	scrollbar: "#bbb",
	scrollbarHover: "#888",
	placeholder: "#999999",
};

export const darkTheme = {
	background: "#2b2b2b",
	text: "#ffffff",
	border: "#444444",
	sectionBackground: "#3c3c3c",
	itemBackground: "#4d4d4d",
	scrollbar: "#555555",
	scrollbarHover: "#777777",
	placeholder: "#aaaaaa",
};
