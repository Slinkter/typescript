import { ActionType } from "../types";

export interface DepositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}

export interface WithdrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}

export type Action = DepositAction | WithdrawAction;
