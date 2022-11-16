import styled from "styled-components";

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

function Input ( { Label, Placeholder, ...props } ) {
    return (
        <InputContainer>
            <StyledLabel>{Label}</StyledLabel>
            <StyledInput placeholder={Placeholder} {...props}/>
        </InputContainer>
    )
}

export default Input