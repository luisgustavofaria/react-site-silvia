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
    border: 2px solid black;
    padding: 15px 20px;
    box-sizing: border-box;
    border-radius: 10px;  
    background-color: #F5F5F5;
    
    ${props => props.error && `border: 2px solid red;`}
`

const ErrorLabel = styled.span`
  color: red;
  font-weight: bold;
  font-size: 14px;
`

const errorMessage = {
  'string.empty': 'Este campo é obrigatório.',
  'string.email': 'Por favor, digite um e-mail válido.'
}

const Input = forwardRef(({label, error, placeholder, ...props}, ref) => {
    return (
        <InputContainer>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput placeholder={placeholder} error={error} {...props} ref={ref}/>
            {error && <ErrorLabel>{errorMessage[error.type] || error.message}</ErrorLabel>}
        </InputContainer>
    )
})

export default Input