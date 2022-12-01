import styled from "styled-components"
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from '@hookform/resolvers/joi'

import { signupSchema } from '../modules/user/user.schema'

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
    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: joiResolver(signupSchema)
    })

    const handleForm = (data) => {
        console.log(data);
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

                            <Form onSubmit={handleSubmit(handleForm)}>        
                                <Input Label="Digite Nome" Placeholder="Nome" type="text" {...register('firstName')}/>
                                <Input Label="Digite Sobrenome" Placeholder="Sobrenome" type="text" {...register('lastName')}/>
                                <Input Label="Digite Usuario" Placeholder="Usuario" type="text" {...register('user')}/>
                                <Input Label="Digite Email" Placeholder="Email" type="email" {...register('email')}/>
                                <Input Label="Digite Senha" Placeholder="Senha" type="password" {...register('password')}/>
                                <Button type="submit">Cadastrar</Button>
                            </Form>                                                   
                    </Card>   
                </FormContainer>
            </Column>
        </>
    )
}

export default Signup