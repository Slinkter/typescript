import type { Dispatch } from "redux";
import type { Action } from "../actions";
import { ActionType } from "../types";

// Un thunk es una función que recibe `dispatch` y devuelve void.
// `Dispatch<Action>` tipa el despacho de nuestras acciones del banco.
export type BankThunk = (dispatch: Dispatch<Action>) => void;

export const depositMoney = (amount: number): BankThunk => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: number): BankThunk => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount,
    });
  };
};
