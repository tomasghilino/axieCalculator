import React, { useReducer } from 'react';
import { SUMAR_ENERGIA, RESTAR_ENERGIA, SUMAR_RONDA, RESET } from '../../types';
import appContext from './appContext';
import appReducer from './appReducer';

const AppState = ({ children }) => {
  const initialState = {
    ronda: 1,
    energia: 3,
    bgColor: '',
  };

  //crear dispatch y state
  const [state, dispatch] = useReducer(appReducer, initialState);

  const sumarEnergia = () => {
    if (state.energia !== 10) {
      dispatch({
        type: SUMAR_ENERGIA,
        payload: 1,
      });
    }
  };

  const restarEnergia = () => {
    if (state.energia !== 0) {
      dispatch({
        type: RESTAR_ENERGIA,
        payload: 1,
      });
    }
  };

  const siguienteRonda = () => {
    if (state.energia === 9) {
      dispatch({
        type: SUMAR_ENERGIA,
        payload: 1,
      });
    } else if (state.energia !== 10) {
      dispatch({
        type: SUMAR_ENERGIA,
        payload: 2,
      });
    }
    dispatch({
      type: SUMAR_RONDA,
      payload: 1,
    });
  };

  const reset = () => {
    dispatch({
      type: RESET,
      payload: {
        ronda: 1,
        energia: 3,
      },
    });
  };

  return (
    <appContext.Provider
      value={{
        ronda: state.ronda,
        energia: state.energia,
        bgColor: state.bgColor,
        sumarEnergia,
        restarEnergia,
        siguienteRonda,
        reset,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppState;
