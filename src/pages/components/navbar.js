import React from "react"
import styled from "styled-components"

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  font-family: "Roboto";
`

const Logo = styled.h3`
  width: 35%;
`

const Links = styled.ul`
  width: 65%;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 0.9rem;
`

const Active = styled.li`
  color: #fd8803;
`

const Li = styled.li``

const Anchor = styled.a`
  text-decoration: none;
  color: #000;
`

const Button = styled.button`
  padding: 10px;
  background-color: #43b97f;
  color: white;
  border: none;
  border-radius: 3px;
`
const navbar = () => {
  return (
    <Navbar>
      <Logo>MRstudio</Logo>
      <Links>
        <Li>
          <Active>Catalogue</Active>
        </Li>
        <Li>
          <Anchor href="#">Your Cart</Anchor>
        </Li>
        <Li>
          <Anchor href="#">Favorites</Anchor>
        </Li>
        <Li>
          <Anchor href="#">Your Orders</Anchor>
        </Li>
        <Li>
          <Button>Get Started</Button>
        </Li>
      </Links>
    </Navbar>
  )
}

export default navbar
