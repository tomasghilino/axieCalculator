import styled from '@emotion/styled';

export const Corazon = styled.div`
  position: relative;
  width: 160px;
  height: 160px;

  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 80px;
    top: 0;
    width: 80px;
    height: 140px;
    background: #660101;
    border-radius: 80px 80px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
    animation: pulsecolor 0.9s infinite;
    transition: 1s ease-in-out;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
    animation: pulsecolor 0.9s infinite;
    transition: 1s ease-in-out;
  }

  @keyframes pulse {
    10% {
      transform: scale(1.1);
    }
  }

  @keyframes pulsecolor {
    10% {
      background: #d10c0c;
    }
  }
`;

export const Ronda = styled.p`
  color: white;
  background-color: #3535df;
  padding: 1rem;
  font-family: 'Roboto', sans-serif;
  font-size: 2.5rem;
  text-align: center;
  border-radius: 2rem;
`;

export const ImagenEnergia = styled.img`
  padding: 1.5rem;
`;

export const Energia = styled.p`
  color: #ffffff;

  font-size: 5.2rem;
  font-family: 'Roboto', sans-serif;
  transition: 1s ease-in;
`;

export const EnergiaContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #26014b;
  border-radius: 2rem;
`;

export const Boton = styled.button`
  padding: 3rem 0;
  border: none;
  border-radius: 1rem;
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#5762fd')};
  color: white;
  transition: 0.3s;
  border: none;
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  box-shadow: -1px 10px 12px 0px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: -1px 10px 12px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: -1px 10px 12px 0px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    border: none;
    transform: scale(0.9);
  }
`;

export const BotonesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

export const GifAxie = styled.img`
  grid-area: 'gif';
  margin: 0 auto;
  transition: 0.8s ease-in-out;
`;

export const Div = styled.div`
  width: 60%;
  margin: 0 auto;
`;

export const DivSlp = styled.div`
  display: grid;
  grid-template-areas: 'gif gif', 'input input', 'boton boton', 'total total';
`;
