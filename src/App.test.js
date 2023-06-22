import React from "react";
import * as ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("ToDo", () => {
  const { getByText, getByLabelText } = render(<App />);
  //after rendering our component
  getByText("Account");
  getByText("Password");
});

test("fireEvent login form", () => {
  const { getByTestId, getByText } = render(<App />);
  getByTestId("account");
  fireEvent.change(getByTestId("account"), { target: { value: "Alejandro" } });
  getByTestId("password");
  fireEvent.change(getByTestId("password"), {
    target: { value: "super@Password" },
  });
  fireEvent.click(getByTestId("loginaccount"));
  //confirm data
  getByTestId("success");
});

test("user-events allows users to add...", () => {
  const { getByText, getByTestId, getByLabelText } = render(<App />);

  const inputLogin = getByTestId("account");
  const inputPassword = getByTestId("password");
  const button = getByText("Login Account");

  userEvent.type(inputLogin, "Alejandro");
  userEvent.type(inputPassword, "123");
  userEvent.click(button);

  getByTestId("success");
});
