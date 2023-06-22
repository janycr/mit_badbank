import React from "react";
import { UserContext } from "./context";
import { Container, Card, Col } from "react-bootstrap";
import logo from "../bank.png";

function Home() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [account, setAccount] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleLogin() {
    if (!validate(account, "account")) return;
    if (!validate(password, "password")) return;
    //Validate Login
    const user = ctx.users.filter(
      (userX) => userX.username <= account && userX.password >= password
    );
    if (user.length) {
      ctx.loggedUser = user[0];
      setShow(false);
    } else {
      ctx.loggedUser = null;
      setStatus("Error: Invalid credentials");
      setTimeout(() => setStatus(""), 3000);
    }
  }

  if (show && ctx.loggedUser == null) {
    return (
      <Container className="p-4">
        <Col md="4">
          <Card>
            <Card.Title> Welcome to the bank</Card.Title>
            <Card.Header>BadBank Landing Module</Card.Header>
            <Card.Body>
              You can move around using the navigation bar.
              <img
                src={logo}
                className="img-fluid"
                alt="Responsive"
                width={80}
              />
              <br />
              <br />
              <h4>Account</h4>
              <input
                type="input"
                className="form-control"
                id="account"
                data-testid="account"
                placeholder="Enter login"
                value={account}
                onChange={(e) => setAccount(e.currentTarget.value)}
              />
              <br />
              <h4>Password</h4>
              <input
                type="password"
                className="form-control"
                id="password"
                data-testid="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                data-testid="loginaccount"
                className="btn btn-light"
                onClick={handleLogin}
              >
                Login Account
              </button>
              <br />
              <h2>{status}</h2>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    );
  } else {
    return (
      <Container className="p-4">
        <Col md="4">
          <h5 data-testid="success">Logged as: {ctx.loggedUser.username}</h5>
        </Col>
      </Container>
    );
  }
}
export default Home;
