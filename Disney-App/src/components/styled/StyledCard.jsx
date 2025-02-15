import styled from "styled-components"

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 1px;
	width: 240px;
  height: 260px;
  background-color: #e2e2e2;
  border: 1px solid #a0a0a0;
  border-radius: 6px;
  box-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.75);

`

export const Image = styled.img`
 margin: 0px;
 width: 240px;
 max-height: 160px;
 // aspect-ratio: 1;
 overflow: hidden;
 object-fit: contain;
`

export const Title = styled.div`
  

`
  // color: &{colors.something}
  // border: 1px solid ${colors.something}

// .colors {
//   color:#310a31;
//   color:#847996;
//   color:#88b7b5;
//   color:#a7cab1;
//   color:#f4ecd6;

//   color: #ebebeb;
// }
