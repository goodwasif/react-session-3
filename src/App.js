import React, { useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import { AddTransaction } from "./components/AddTransaction";

import { Provider } from "./context/GlobalState";
import useViewport from "./hooks/useViewport";
import "./App.css";

function App() {
  const { width } = useViewport();

  return (
    <Provider>
      <Header title="Expense Tracker" />
      <div className="container">
        <Balance />
        <IncomeExpenses width={width} />
        <TransactionList />
        <AddTransaction />
      </div>
    </Provider>
  );
}

export default App;
