// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 1rem;

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2rem 1rem;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    gap: 2rem;
    padding: 3rem 2rem;
  }
`;

const Left = styled.div`
  margin-bottom: 2rem;

  @media (min-width: 992px) {
    flex-basis: 50%;
    margin-bottom: 0;
  }
`;

const Title = styled.h2`
  color: #4361ee;
  margin-bottom: 1rem;
  font-size: 2.44rem;
`;

const Genre = styled.h3`
  color: #b5179e;
  margin-bottom: 1rem;
  font-size: 1.59rem;
`;

const Description = styled.p`
  color: #64748b;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #4361ee;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #274cdb;
  }
`;

const Right = styled.div`
  @media (min-width: 992px) {
    flex-basis: 50%;
    display: flex;
    justify-content: center;
  }
`;

const Poster = styled.img`
  width: 350px;
  height: 350px;  
  object-fit: cover;
  border-radius: 25px;
  margin: 0 auto;

  @media (min-width: 992px) {
    margin: 0;
  }
`;

function Hero() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data);
    }
    fetchMovie();
  }, []);

  return (
    <Container>
      <Section>
        <Left>
          <Title>{movie ? movie.Title : "Loading..."}</Title>
          <Genre>Genre: {movie ? movie.Genre : "-"}</Genre>
          <Description>
            {movie ? movie.Plot : "Loading description..."}
          </Description>
          <Button>Watch</Button>
        </Left>
        <Right>
          <Poster
            src={
              movie && movie.Poster !== "N/A"
                ? movie.Poster
                : "https://picsum.photos/536/354"
            }
            alt={movie ? movie.Title : "placeholder"}
          />
        </Right>
      </Section>
    </Container>
  );
}

export default Hero;
