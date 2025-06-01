// src/components/Footer.jsx
import styled from "styled-components";

const Container = styled.footer`
  background-color: #4361ee;
  color: white;
  text-align: center;
  padding: 1rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 2.4rem;
`;

const Author = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

function Footer() {
  return (
    <Container>
      <Title>Movie App</Title>
      <Author>Created by Sakha As Shidqi</Author>
    </Container>
  );
}

export default Footer;
