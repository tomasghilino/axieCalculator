import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Boton = styled.a`
  background-color: white;
  cursor: pointer;
  padding: 1.2rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  transition: 0.3s ease-in-out;
  font-family: 'Roboto', sans-serif;

  &:hover {
    background-color: #d0eff6;
  }
`;

const Header = () => {
  return (
    <nav
      className="navbar navbar-dark"
      css={css`
        padding: 1rem;
        box-shadow: -1px 10px 12px 0px rgba(0, 0, 0, 0.15);
        -webkit-box-shadow: -1px 10px 12px 0px rgba(0, 0, 0, 0.15);
        -moz-box-shadow: -1px 10px 12px 0px rgba(0, 0, 0, 0.15);
        background: rgb(53, 53, 119);
        background: linear-gradient(
          82deg,
          rgba(53, 53, 119, 1) 0%,
          #7734ca 100%
        );
      `}
    >
      <div>
        <Link href="/">
          <a
            css={css`
              margin: 20px;
              cursor: pointer;
            `}
          >
            <img
              src="/axielogo.png"
              alt="axie infinity logo"
              height="65"
              css={css`
                transition: 0.3s ease-in;
                &:hover {
                  transform: scale(1.2);
                }
              `}
            />
          </a>
        </Link>

        <Link href="/como-funciona">
          <Boton>¿Cómo Funciona?</Boton>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
