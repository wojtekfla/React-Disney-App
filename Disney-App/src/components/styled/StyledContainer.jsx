import styled from "styled-components";

export const StyledContainer = styled.div`
	outline: 0.25rem solid #a7cab1;
	margin: 0 auto;
	padding: 0;
	box-sizing: border-box;
	// min-width: 801px;
	max-width: 1600px;
  text-align: center;
	display: flex;
  align-items: center;
  flex-wrap: wrap;

	background-color: ${({ $theme }) => $theme.bg1};
	color: ${({ $theme }) => $theme.color1};
	// color: ${({ theme }) => theme.color};	

	@media (min-width: 480px  ) {

	}

	@media (min-width: 800px ) {

	}


`

