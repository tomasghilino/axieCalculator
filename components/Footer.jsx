import React from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Enlace = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
  font-family: 'Roboto', sans-serif;
  padding: 0.9rem;
  text-align: center;
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
  transition: 0.3s ease-in-out;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  display: inline-flex;

  width: 25%;

  @media (max-width: 768px) {
    width: 80%;
  }
  &:active {
    transform: scale(0.9);
  }
  &:hover {
    text-decoration: none;
    color: #000000;
    background-color: white;
  }
`;

const Footer = () => {
  return (
    <footer>
      <div
        className="container"
        css={css`
          text-align: center;
        `}
      >
        <Enlace
          href="https://github.com/tomasghilino"
          target="_blank noreferrer"
        >
          <img src="/github.png" alt="github logo" height="40" />
          <p>GitHub - Tomás Ghilino</p>
        </Enlace>

        <p className="text-secondary ">
          En caso de donación (no es necesario):
        </p>
        <Enlace
          onClick={() =>
            navigator.clipboard.writeText(
              'ronin:ad694ae03a26e186d383366f7b43df1f5dc237e3'
            )
          }
          className="text-primary"
        >
          Copiar Dirección
        </Enlace>
      </div>
    </footer>
  );
};

export default Footer;
