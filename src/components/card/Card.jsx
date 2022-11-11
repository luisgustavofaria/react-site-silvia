import styled from "styled-components"

import H1 from "../typography/H1"
import H2 from "../typography/H2"

const StyledFlex = styled.div`
    background-color: red;
    width: 100%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    
`

function Card ({ children }) {
    return (
        <StyledFlex>
            {children}
        </StyledFlex>
    )
}

export default Card