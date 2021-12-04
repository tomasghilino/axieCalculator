import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const BotonSLP = styled.button`
  display: block;
  border: none;
  padding: 1.4rem;
  color: white;
  width: 100%;
  background-color: #1b8be7;
  border-radius: 0.5rem;
  margin-top: 1rem;

  transition: 0.3s ease;

  &:hover {
    transform: scale(1.01);
  }
`;

const Input = styled.input`
  padding: 2rem;
  border-radius: 0.5rem;
  width: 100%;
  margin: 0;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  &[type='number'] {
    -moz-appearance: textfield; /* Firefox */
  }
`;

const SLPTotal = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  border-radius: 0.5rem;
  margin-top: 1.5rem;
  padding: 2rem;
  color: #ffffff;
  background-color: #50b100;
  text-align: center;
`;

const CantidadSlp = () => {
  const [slpTotal, setSlpTotal] = useState(0);
  const [slp, setSlp] = useState('');

  const OnSubmit = (e) => {
    e.preventDefault();
    sumarSlp();
    setSlp('');
  };

  const sumarSlp = () => {
    if (slp != '') {
      let slpNumero = slpTotal + parseInt(slp);
      setSlpTotal(Number(slpNumero));
    }
  };
  return (
    <form onSubmit={(e) => OnSubmit(e)}>
      <p
        css={css`
          margin-top: 1.5rem;
          font-size: 1.7rem;
          color: #fb3535;
          font-family: 'Roboto', sans-serif;
          text-align: center;
          margin-bottom: 1rem;
        `}
      >
        SLP ganados en esta partida:
      </p>
      <div className="form-group mx-sm-3 mb-2">
        <Input
          type="number"
          id="inputSLP"
          placeholder="Ingresar"
          value={slp}
          min="0"
          onChange={(e) => setSlp(parseInt(e.target.value))}
        />
      </div>
      <BotonSLP type="submit">Ingresar</BotonSLP>

      <SLPTotal>$SLP Total de hoy: {slpTotal}</SLPTotal>
    </form>
  );
};

export default CantidadSlp;
