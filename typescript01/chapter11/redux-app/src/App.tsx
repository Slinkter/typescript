import { useDispatch, useSelector } from "react-redux";
import { depositMoney, withdrawMoney } from "./state/creators";
import type { AppDispatch } from "./state/store";
import type { RootState } from "./state/reducers";
import "./App.css";

function App() {
  const amount = useSelector((state: RootState) => state.bank);
  const dispatch = useDispatch<AppDispatch>();

  const deposit = (value: number) => dispatch(depositMoney(value));
  const withdraw = (value: number) => dispatch(withdrawMoney(value));

  return (
    <div className="App">
      <h1 className="balance">{amount}</h1>
      <p className="label">Saldo actual (€)</p>
      <div className="buttons">
        <button className="btn deposit" onClick={() => deposit(1000)}>
          Deposit
        </button>
        <button className="btn withdraw" onClick={() => withdraw(500)}>
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default App;
