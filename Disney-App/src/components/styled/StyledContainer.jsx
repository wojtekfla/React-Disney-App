import styled from "styled-components";

export const StyledContainer = styled.div`
	outline: 0.25rem solid #a7cab1;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	// min-width: 801px;
	max-width: 1400px;
  text-align: center;
	display: flex;
  align-items: center;
  flex-wrap: wrap;

	background-color: ${({$darkMode}) => ($darkMode? 'black' : 'white')};
	color: ${({$darkMode}) => ($darkMode? 'white' : 'black')};
	
	@media (min-width: 480px  ) {

	}

	@media (min-width: 800px ) {

	}


`;

// .colors {
//   color:#310a31;
//   color:#847996;
//   color:#88b7b5;
//   color:#a7cab1;
//   color:#f4ecd6;

//   color: #ebebeb;
// }

// xs: 480px
// md: 768px
// xl: 1280px