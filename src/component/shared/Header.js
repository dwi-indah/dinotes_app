import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'

const Container = styled.div`
    margin: 1rem;
    padding: 0.5rem;
`;

const Header = () => {
    return (
        <Container>
            <img src={logo} alt="Logo DinoTes App" />
            <h1>DinoTes App</h1>
        </Container>
    )
}

export default Header
