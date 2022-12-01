import styled from "styled-components"
import Link from "next/link";
import { useState } from "react";

import Card from "../src/components/card/Card";
import H1 from '../src/components/typography/H1'
import H2 from "../src/components/typography/H2";
import H3 from "../src/components/typography/H3";
import H4 from "../src/components/typography/H4";
import Button from "../src/components/inputs/Button";
import Input from "../src/components/inputs/Input";
import Menu from "../src/components/menu/Menu";

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FormContainer = styled.div`
    display: flex;
    text-align: start;
    gap: 40px;
    max-width: 1000px;
    margin-top: 60px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  margin: 20px 0 20px;
  gap: 20px;
`


function Signup () {

    const [firstName, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleForm = (e) => {
        e.preventDefault()
        console.log({
            firstName,
            lastName,
            user,
            email,
            password
        });
    }

    return (
        <>
            <Menu></Menu>
            <Column>
                <FormContainer>
                    <Card>
                        <H2>Criar um conta</H2>
                        <H3>Você pode salvar itens na sua sacola!</H3>  
                        <H4>Já tem cadrastro? <Link href="/login">Faça seu Login</Link></H4>

                            <Form onSubmit={handleForm}>        
                                <Input Label="Digite Nome" Placeholder="Nome" type="text" onChange={(e) => {setName(e.target.value)}}/>
                                <Input Label="Digite Sobrenome" Placeholder="Sobrenome" type="text" onChange={(e) => {setLastName(e.target.value)}}/>
                                <Input Label="Digite Usuario" Placeholder="Usuario" type="text" onChange={(e) => {setUser(e.target.value)}}/>
                                <Input Label="Digite Email" Placeholder="Email" type="email" onChange={(e) => {setEmail(e.target.value)}}/>
                                <Input Label="Digite Senha" Placeholder="Senha" type="password" onChange={(e) => {setPassword(e.target.value)}}/>
                                <Button>Cadastrar</Button>
                            </Form>                                                   
                    </Card>   
                </FormContainer>
            </Column>
        </>
    )
}

export default Signup