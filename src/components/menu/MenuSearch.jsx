import styled from "styled-components"
import Link from "next/link"

import H4 from "../typography/H4"


const FormContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Form = styled.form`
    display: flex;
    align-items: center;
`

const Input = styled.input`
    width: 400px;
    height: 50px;
    border-radius: 10px 0px 0px 10px;
    font-size: 20px;
    border: none;
    padding-left: 20px;
`

const ButtonImg = styled.button`
    height: 50px;
    width: 80px;
    border: none;
    border-radius: 0px 10px 10px 0px;  
    background-color: white;
    cursor: pointer;
`

const LoginContainer = styled.div`
    display: flex;
    gap: 20px;
`

const ButtonLogin = styled.button`

background-color: white;
color: black;
text-decoration: none;
border-radius: 10px;
padding: 0px 10px 0px 10px;
margin: 6px;
display: flex;
cursor: pointer;
font-family: 'Roboto', sans-serif;
display: flex;
align-items: center;
`

function MenuSearch() {
    return(
        <FormContainer>
            <Form>              
                <Input placeholder="O que você procura?" type="search" />
                <ButtonImg>
                    <img src="/Lupa.png" alt="" srcset="" />
                </ButtonImg>
            </Form>
            <LoginContainer>
                <Link href="/login">
                    <ButtonLogin>
                        <p>
                            Entre ou Cadastre
                        </p>
                    </ButtonLogin>
                </Link>
                <Link href="/purchase">
                    <ButtonLogin>
                        <img src="/Sacola.png" alt="" srcset="" />0 ITEM
                    </ButtonLogin>
                </Link>
                
            </LoginContainer>
        </FormContainer>
    )
}

export default MenuSearch