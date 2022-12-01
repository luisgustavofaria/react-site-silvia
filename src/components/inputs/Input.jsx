import styled from "styled-components";
import { forwardRef } from "react";

const InputContainer = styled.div`
    width: 100%;
`

const StyledLabel = styled.p`
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
`

const StyledInput = styled.input`
    width: 100%;
    border: 1px;
    padding: 15px 20px;
    box-sizing: border-box;
    border-radius: 10px;
    
`

const Input = forwardRef(({Label, Placeholder, ...props}, ref) => {
    return (
        <InputContainer>
            <StyledLabel>{Label}</StyledLabel>
            <StyledInput placeholder={Placeholder} {...props} ref={ref}/>
        </InputContainer>
    )
})

export default Input