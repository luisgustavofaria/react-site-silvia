import styled from "styled-components"
import Link from "next/link";

import Card from "../src/components/card/Card";
import H1 from '../src/components/typography/H1'
import H2 from "../src/components/typography/H2";
import H3 from "../src/components/typography/H3";
import H4 from "../src/components/typography/H4";
import Button from "../src/components/inputs/Button";
import Input from "../src/components/inputs/Input";
import Menu from "../src/components/menu/Menu";

const FlexboxColumn = styled.div`
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


function LoginPage () {
    return (
        <>
            <Menu>Menuuuuuuu</Menu>
            <FlexboxColumn>
                <H1>ACESSAR MINHA CONTA</H1>
                <FormContainer>
                    <Card>
                        <H2>Entrar</H2>
                        <H3>Por favor, entre na sua conta!</H3>   
                        <H4>Já tem uma conta Silvia Faria Jóias?</H4> 
                            <Form>        
                                <Input label="Digite Email" placeholder="Email" type="email"/>
                                <Input label="Digite Senha" placeholder="Senha" type="password"/>
                                <Button>Entrar</Button>
                            </Form>                                                   
                    </Card>   
                    <Card> 
                        <H2>Criar uma conta</H2>
                        <H3>Economize tempo na hora de finalizar a compra, veja sua sacola de compras e itens salvos a partir de qualquer dispositivo e acesse seu histórico de pedidos.</H3>       
                        <Link href="/signup"><Button>Registrar</Button></Link>
                    </Card>  
                </FormContainer>
            </FlexboxColumn>
        </>
    )
}

export default LoginPage