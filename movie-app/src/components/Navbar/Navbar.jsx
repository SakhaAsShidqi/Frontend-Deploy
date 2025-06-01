import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const breakpoints = {
  md: "768px",
  lg: "992px"
};

const Container = styled.div`
  background-color: #4361ee;
  padding: 1rem;
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Brand = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 1rem;

  @media (min-width: ${breakpoints.md}) {
    margin-bottom: 0;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`;

const NavItem = styled.li`
  margin-bottom: 1rem;

  @media (min-width: ${breakpoints.md}) {
    margin: 0 1rem;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: #ffd60a;
    }
  }
`;

function Navbar() {
  return (
    <Container>
      <Nav>
        <Brand>Movie App</Brand>
        <NavList>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/movie/create">Add Movie</Link>
          </NavItem>
          <NavItem>
            <Link to="/popular">Popular</Link>
          </NavItem>
          <NavItem>
            <Link to="/now-playing">Now Playing</Link>
          </NavItem>
          <NavItem>
            <Link to="/top-rated">Top Rated</Link>
          </NavItem>
        </NavList>
      </Nav>
    </Container>
  );
}

export default Navbar;
