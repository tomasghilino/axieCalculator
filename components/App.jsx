import React, { useState } from 'react';
import CantidadSlp from './CantidadSlp';
import * as StyledComponents from './StyledComponents';

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
} = StyledComponents;

const App = () => {
  const [energia, setEnergia] = useState(3);

  const [ronda, setRonda] = useState(1);

  const sumarEnergia = () => {
    if (energia !== 10) {
      setEnergia(energia + 1);
    }
  };

  const restarEnergia = () => {
    if (energia !== 0) {
      setEnergia(energia - 1);
    }
  };

  const siguienteRonda = () => {
    if (energia === 9) {
      sumarEnergia();
    } else if (energia !== 10) {
      setEnergia(energia + 2);
    }
    setRonda(ronda + 1);
  };

  const reset = () => {
    setEnergia(3);
    setRonda(1);
  };
  return (
    <div className="mt-5">
      <Div>
        <Ronda>Ronda {ronda}</Ronda>
        <EnergiaContainer>
          <ImagenEnergia src="/energy.png" alt="energy" height="110" />
          <Energia>{energia}/10</Energia>
        </EnergiaContainer>
        <BotonesContainer>
          <Boton onClick={restarEnergia}>- 1 Energía</Boton>
          <Boton onClick={sumarEnergia}>+ 1 Energía</Boton>
          <Boton onClick={siguienteRonda} bgColor="#ee516b">
            Siguiente Ronda
          </Boton>
          <Boton onClick={reset} bgColor="#9c0d5a">
            Reset
          </Boton>
        </BotonesContainer>

        <DivSlp>
          <GifAxie src="/axiegif.gif" alt="axie gif" />

          <CantidadSlp />
        </DivSlp>
      </Div>
    </div>
  );
};

export default App;
