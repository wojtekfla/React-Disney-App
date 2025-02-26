import styled from "styled-components";


export const Flex = styled.div`
	margin: 0.5rem 0 ;
	padding: 0 1rem;
	display: flex;
  justify-content: ${(props) => props.justify};
	align-items: center;
	flex-wrap: wrap;
	width:	${(props) => props.width};
	min-height: 2rem;
`;
