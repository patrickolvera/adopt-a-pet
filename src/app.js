import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title!");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Luna",
        animal: "dog",
        breed: "Poodle"
      }),
      React.createElement(Pet, {
        name: "Hunter",
        animal: "dog",
        breed: "German Shepherd"
      }),
      React.createElement(Pet, {
        name: "Mikey",
        animal: "cat",
        breed: "tabby"
      })
    ]);
  }
}

render(React.createElement(App), document.getElementById("root"));
