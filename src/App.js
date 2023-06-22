import React from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./Components/context";
import Home from "./Components/home";
import CreateAccount from "./Components/createaccount";
import Deposit from "./Components/deposit";
import Withdraw from "./Components/withdraw";
import Balance from "./Components/balance";
import AllData from "./Components/alldata";
import NavBar from "./Components/navbar";

function App() {
  return (
    <UserContext.Provider
      value={{
        users: [
          {
            username: "ale",
            email: "janycr@gmail.com",
            password: "123",
            balance: 100,
          },
          {
            username: "zombie",
            email: "zomboe@gmail.com",
            password: "123",
            balance: 200,
          },
        ],
      }}
    >
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/createaccount/" element={<CreateAccount />} />
          <Route path="/deposit/" element={<Deposit />} />
          <Route path="/withdraw/" element={<Withdraw />} />
          <Route path="/balance/" element={<Balance />} />
          <Route path="/alldata/" element={<AllData />} />
        </Routes>
      </HashRouter>
    </UserContext.Provider>
  );
}

export default App;
