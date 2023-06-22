import React from "react";
import { UserContext } from "./context";
import { Container, Card, Col } from "react-bootstrap";

function Withdraw() {
  const ctx = React.useContext(UserContext);
  const [amount, setAmount] = React.useState("");
  const [balance, setBalance] = React.useState(0);
  const [error, setError] = React.useState("");

  function handleWithdraw() {
    //console.log(ctx.loggedUser.balance, Number(amount));
    if (Number(amount) <= Number(ctx.loggedUser.balance)) {
      ctx.loggedUser.balance = Number(ctx.loggedUser.balance) - Number(amount);
      setBalance(ctx.loggedUser.balance);
      setError("Withdraw Success");
    } else {
      setError("Insufficient funds!");
    }
  }

  if (ctx.loggedUser) {
    return (
      <Container className="p-4">
        <Col md="4">
          <Card>
            <Card.Title>
              {" "}
              Welcome to the bank <b>{ctx.loggedUser.username}</b>
            </Card.Title>
            <Card.Header>Withdraw</Card.Header>
            <Card.Body>
              Current Balance: {ctx.loggedUser.balance}
              <br />
              <br />
              <h4>Amount</h4>
              <input
                type="number"
                className="form-control"
                id="amount"
                data-testid="amount"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                data-testid="withdraw"
                className="btn btn-light"
                onClick={handleWithdraw}
              >
                Withdraw
              </button>
              <br />
              <h2>{error}</h2>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    );
  } else {
    <h1>Log in first!</h1>;
  }
}
export default Withdraw;
