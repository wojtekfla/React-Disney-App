import { StyledButton } from "./styled/StyledButton"

export function Button ({children, onClick}) {
  return ( 
    <StyledButton onClick={onClick}>{children}</StyledButton>
   )
}

