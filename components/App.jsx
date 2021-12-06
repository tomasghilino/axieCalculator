import React, { useState, useContext, useEffect } from 'react';
import CantidadSlp from './CantidadSlp';
import * as StyledComponents from './StyledComponents';
import { css } from '@emotion/react';
import appContext from '../context/app/appContext';

const {
  Ronda,
  Div,
  EnergiaContainer,
  ImagenEnergia,
  Energia,
  BotonesContainer,
  Boton,
  DivSlp,
  GifAxie,
  Corazon,
} = StyledComponents;

const App = () => {
  const AppContext = useContext(appContext);
  const { ronda, energia, restarEnergia, sumarEnergia, siguienteRonda, reset } =
    AppContext;

  useEffect(() => {
    ronda < 10
      ? (document.body.style.backgroundColor = '#01132e')
      : (document.body.style.backgroundColor = '#250000');
  }, [ronda]);

  return (
    <div className="mt-5">
      <Div>
        <Ronda>Ronda {ronda}</Ronda>
        <EnergiaContainer>
          <ImagenEnergia src="/energy.png" alt="energy" height="110" />
          <Energia>{energia}/10</Energia>
        </EnergiaContainer>
        <BotonesContainer>
          <Boton onClick={() => restarEnergia()}>- 1 Energía</Boton>
          <Boton onClick={() => sumarEnergia()}>+ 1 Energía</Boton>
          <Boton onClick={() => siguienteRonda()} bgColor="#ee516b">
            Siguiente Ronda
          </Boton>
          <Boton onClick={() => reset()} bgColor="#9c0d5a">
            Reset
          </Boton>
        </BotonesContainer>

        <DivSlp>
          {ronda < 10 ? (
            <>
              <GifAxie src="/axiegif.gif" alt="axie gif" />
            </>
          ) : (
            <div
              css={css`
                margin: 5rem auto;
              `}
            >
              <Corazon />
            </div>
          )}

          <CantidadSlp />
        </DivSlp>
      </Div>
    </div>
  );
};

export default App;
