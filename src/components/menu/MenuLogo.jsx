import styled from "styled-components"
import Link from "next/link";

const DivImg = styled.div`
    cursor: pointer;
`

function MenuLogo() {
    return (
        <DivImg>
            <Link href="/">
                <img src="/Logo.png" alt="" />
            </Link>  
        </DivImg>
    )
}

export default MenuLogo