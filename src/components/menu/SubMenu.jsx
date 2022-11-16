import styled from "styled-components"

const SubMenuContainer = styled.div`
    display: flex;
`

const SubMenuDiv = styled.li`
    border: solid 1px white;
    border-radius: 5px;
    list-style-type: none;
    text-transform: uppercase;
    color: #f4d578;
    padding: 10px;
    margin: 5px;
    width: 80px;
    text-align: center;
    
    
    :hover {
        background-color: white;
        transition: 0.5s;
        border: 1px solid #f4d578;
        color: black;
    }
`

function SubMenu() {
    return(
        <SubMenuContainer>
            <SubMenuDiv>alianças</SubMenuDiv>
            <SubMenuDiv>aneis</SubMenuDiv>
            <SubMenuDiv>brincos</SubMenuDiv>
            <SubMenuDiv>colares</SubMenuDiv>
            <SubMenuDiv>infantil</SubMenuDiv>
            <SubMenuDiv>pingentes</SubMenuDiv>
            <SubMenuDiv>pulseiras</SubMenuDiv>
            <SubMenuDiv>religioso</SubMenuDiv>
        </SubMenuContainer>
        
    )
}

export default SubMenu