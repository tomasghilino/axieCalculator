import { SUMAR_ENERGIA, RESTAR_ENERGIA, SUMAR_RONDA, RESET } from '../../types';

const appReducer = (state, action) => {
  switch (action.type) {
    case SUMAR_ENERGIA:
      return {
        ...state,
        energia: state.energia + action.payload,
      };
    case RESTAR_ENERGIA:
      return {
        ...state,
        energia: state.energia - action.payload,
      };
    case SUMAR_RONDA:
      return {
        ...state,
        ronda: state.ronda + action.payload,
      };
    case RESET:
      return {
        ...state,
        ronda: action.payload.ronda,
        energia: action.payload.energia,
      };

    default:
      return state;
  }
};

export default appReducer;
