import React from 'react'
import { Container, HomeMainDiv, NavLogo, SLink } from '../../style'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Container $navMain>
      <Container></Container>
      <Container>
          <SLink to="/home">
            <div>Home</div>
          </SLink>
          <SLink to="/facilities">
            <div>Facilities</div>
          </SLink>
          <SLink to="/rooms">
            <div>Rooms</div>
          </SLink>
          <SLink to="/contact">
            <div>Contact-us</div>
          </SLink>
      </Container>
            
    </Container>
  )
}

export default Navbar