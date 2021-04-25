import * as React from "react";
import styled from "styled-components";

import {theme} from "../theme/GlobalStyles"

import CustomLink from "../components/custom-link.js"


const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    @media (min-width: ${theme.tablet}) {
        
    }
`
const Text = styled.p`
    color: ${theme.navBlue};
    padding: 0.5rem 1rem;
    &:first-child {
        text-decoration: underline;
        width: 100%;
        padding: 2.5rem 0 0 0;
    }
    &:not-first-child{
        flex: 1;
    }
    @media (min-width: ${theme.tablet}) {
        padding: 2rem 3rem;
        &:first-child {
            width: auto;
            padding: 2rem 3rem;
        }
        &:not-first-child{
            flex: row;
        }
    }
`

const NavBar = ({menuLinks}) => {

    const links = menuLinks.map(menuLink => (
        <Text>
             <CustomLink
                to={menuLink.link}
                displayText={menuLink.title}
                linkcolor={ theme.navBlue }
            />
        </Text>
        
       
    ))

    return (
        <Container>
            {links}
        </Container>
    )
}


export default NavBar;
