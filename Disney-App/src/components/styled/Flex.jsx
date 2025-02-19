import styled from "styled-components";

export const Flex = styled.div`
	margin: 1rem 0 0 0;
	// padding: 0 2rem;
	display: flex;
  justify-content: ${(props) => props.justify};
	align-items: center;
	flex-wrap: wrap;
	width:	${(props) => props.width};
`;

