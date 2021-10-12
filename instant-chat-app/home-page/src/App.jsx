import React from "react";
import ReactDOM from "react-dom";
import { Container } from "shards-react";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import Chat from "chat/Chat";

const App = () => (
  <div>
    <Container>
      {/* <h2>Talk </h2> */}
      <h1
        style={{ paddingBottom: "2em", paddingTop: "2em", textAlign: "center" }}
      >
        Chat! with the World!
      </h1>
      <Chat />
      <p>Copyright &#169; Base 3 Solutions</p>
    </Container>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
