import styled from "styled-components"

import H1 from "../typography/H1"
import H2 from "../typography/H2"

const StyledFlex = styled.div`
    border: solid 1px #ceae4f;
    border-radius: 10px;
    width: 100%;
    padding: 25px;
    display: flex;
    flex-direction: column; 
    
    gap: 10px;
`

function Card ({ children }) {
    return (
        <StyledFlex>
            {children}
        </StyledFlex>
    )
}

export default Card