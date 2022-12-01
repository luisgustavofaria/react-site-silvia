import styled from "styled-components";

const Button = styled.button`
    padding: 15px 20px;
    background-color: #ceae4f;
    border-radius: 10px;
    border: 0;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;    

    ${props => !props.disabled && 'cursor: pointer;'}

    :hover {
        background-color: #e0c87f;
    }

    :disabled {
    background-color: #e0c87f;
    cursor: auto;
  }
`

export default Button