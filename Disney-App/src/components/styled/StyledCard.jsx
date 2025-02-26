import styled from "styled-components"

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 4px;
	width: 210px;
  height: 260px;
  background-color: ${({ theme }) => theme.bg2};
	color: ${({ theme }) => theme.color2};
  border: 1px solid #a0a0a0;
  border-radius: 6px;
  box-shadow: 1px 0px 2px 1px #a0a0a0;
`

export const Image = styled.img`
 margin: 0px;
 width: 210px;
 max-height: 160px;
 // aspect-ratio: 1;
 overflow: hidden;
 object-fit: contain;
`

export const Title = styled.div`
`

