import styled from "styled-components";

export const StyledContainer = styled.div`
	margin: 0 auto;
	padding: 0;
	box-sizing: border-box;
	max-width: 1600px;
  text-align: center;
	display: flex;
  align-items: center;
  flex-wrap: wrap;

	background-color: ${({ theme }) => theme.bg2};
	color: ${({ theme }) => theme.color2};


	@media (min-width: 480px  ) {

	}

	@media (min-width: 800px ) {

	}


`

