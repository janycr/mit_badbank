import React from "react";
import { UserContext } from "./context";
import { Container, Card, Col } from "react-bootstrap";

function AllData() {
  const ctx = React.useContext(UserContext);

  const userDivList = () => {
    let userList = [];
    if (ctx.users) {
      userList = ctx.users.map((user) => {
        return (
          <div className="row border-bottom">
            <div className="col-2">{user.username}</div>
            <div className="col-5">{user.email}</div>
            <div className="col-3">{user.password}</div>
            <div className="col-2">{user.balance}</div>
          </div>
        );
      });
    }
    return userList;
  };

  return (
    <>
      <Container className="p-4">
        <Col md="4">
          <Card>
            <Card.Title> Welcome to the bank</Card.Title>
            <Card.Header>Users in Bank</Card.Header>
            <Card.Body>
              <div className="row">
                <div className="col-2">User</div>
                <div className="col-5">Email</div>
                <div className="col-3">Password</div>
                <div className="col-2">Balance</div>
              </div>
              {userDivList()}
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </>
  );
}
export default AllData;
