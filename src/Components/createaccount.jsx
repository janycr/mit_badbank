import React from "react";
import { UserContext } from "./context";
import { Container, Card, Col, Button } from "react-bootstrap";

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
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

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }
  if (show) {
    return (
      <div className="App">
        <Container className="p-4">
          <Col md="4">
            <Card>
              <Card.Body>
                Name
                <br />
                <input
                  type="input"
                  className="form-control"
                  id="name"
                  data-testid="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
                <br />
                Email address
                <br />
                <input
                  type="input"
                  className="form-control"
                  id="email"
                  data-testid="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <br />
                Password
                <br />
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
                  data-testid="createaccount"
                  className="btn btn-light"
                  onClick={handleCreate}
                >
                  Create Account
                </button>
                <br />
                <h2>{status}</h2>
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </div>
    );
  } else {
    return (
      <Container className="p-4">
        <Col md="4">
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>
            Add another account
          </button>
        </Col>
      </Container>
    );
  }
}

export default CreateAccount;
