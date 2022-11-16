import styled from "styled-components"

import H1 from "../typography/H1";
import H2 from "../typography/H2";
import H3 from "../typography/H3";
import H4 from "../typography/H4";
import MenuLogo from "./MenuLogo"
import MenuSearch from "./MenuSearch";
import SubMenu from "./SubMenu";

const Header = styled.div`
    display: flex;
    justify-content: center;
    background-color: #2c2c2c;
    border-bottom: 5px solid #f4d578;
`

const MenuHeader = styled.header`
display: flex;
justify-content: center;
`

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    width: 100%;
    padding-left: 20px;
`

const Frete = styled.div`
    
    color: #f4d578;
    
`


function Menu () {
    return (
        <Header>
            <MenuHeader>
                <MenuLogo/>
                <MenuContainer>
                    <Frete>
                        <H4>
                            Compre com FRETE GRÁTIS para todo o Brasil e receba em sua casa.
                        </H4>
                    </Frete>
                    <MenuSearch></MenuSearch>
                    <SubMenu></SubMenu>
                </MenuContainer>  
            </MenuHeader>
        </Header>
    )
}

export default Menu