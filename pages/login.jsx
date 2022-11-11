import styled from "styled-components"

import Card from "../src/components/card/Card";
import H1 from '../src/components/typography/H1'
import H2 from "../src/components/typography/H2";
import H3 from "../src/components/typography/H3";
import H4 from "../src/components/typography/H4";
import Button from "../src/components/inputs/Button";
import Input from "../src/components/inputs/Input";

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
  margin: 20px 0;
  gap: 20px;
`


function LoginPage () {
    return (
        <>
            <Column>
                <H1>ACESSAR MINHA CONTA</H1>
                <FormContainer>
                    <Card>
                        <H2>Entrar</H2>
                        <H3>Por favor, entre na sua conta!</H3>    
                            <Form>        
                                <Input Label="Email ou usuário" type="email"/>
                                <Input Label="Senha" type="password"/>
                                <Button>Entrar</Button>
                            </Form>                                                   
                    </Card>   
                    <Card> 
                        <H2>Criar uma conta</H2>
                        <H3>Economize tempo na hora de finalizar a compra, veja sua sacola de compras e itens salvos a partir de qualquer dispositivo e acesse seu histórico de pedidos.</H3>       
                        <Button>Registrar</Button>
                    </Card>  
                </FormContainer>
            </Column>
        </>
    )
}

export default LoginPage