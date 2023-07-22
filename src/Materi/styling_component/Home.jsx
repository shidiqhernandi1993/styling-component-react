import React from "react";
import { Container as BootstrapContainer } from "react-bootstrap";
import styled from "styled-components";

const Container = styled(BootstrapContainer)`
  background: url("/Shidiq.jpg");
  background-size: cover;
  position: relative;
  height: 100vh;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.75;
  }
`;

export const Heading = styled.h1`
  letter-spacing: 0.2rem;
  font-size: 5rem;

  @media (width < 500px) {
    font-size: 3rem;
  }
`;

export default function Home() {
  return (
    <Container id="home" className="d-grid" fluid>
      <div className="m-auto text-center z-1">
        <Heading className="text-white mb-3">Shidiq Hernandi Andrian</Heading>
        <a className="w-100 btn btn-lg btn-primary" href="#about">See More</a>
      </div>
    </Container>
  );
}
