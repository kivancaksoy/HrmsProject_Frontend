import React from "react";

import CartSummary from "./CartSummary";
import { Button, Container, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} name="home" to="/" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />

            <Menu.Item>
              <Button primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
