import React from 'react';
import Layout from '../components/Layout';
import styled from '@emotion/styled';

const H1 = styled.h1`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  border-bottom: 3px solid red;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

const P = styled.p`
  line-height: 1.5;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ComoFunciona = () => {
  return (
    <Layout>
      <div className="container bg-white mt-5 p-4 border border-primary rounded">
        <H1>Calculadora de Energías Axie Infinity</H1>
        <P>
          Con esta calculadora vas a poder tener un seguimiento de las energías
          de tu rival, y por consecuente tener mas chances de ganar la partida.
          Una manera de implementarla es como muestra la imagen.
        </P>
        <P>
          Además, vas a poder tener un seguimiento del SLP generado en el día,
          entre otras posibles funcionalidades a futuro.
        </P>
        <img src="/ejemploUso.jpg"></img>
      </div>
    </Layout>
  );
};

export default ComoFunciona;
