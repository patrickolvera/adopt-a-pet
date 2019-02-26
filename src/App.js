import React from "react";
import { Router } from "@reach/router";
import { Global, css } from "@emotion/core";
import { Provider } from "react-redux";
import NavBar from "./NavBar";
import Results from "./Results";
import Details from "./Details";
import SearchParams from "./SearchParams";
import store from "./store";

const globalStyles = css`
  * {
    /* color: hotpink; */
  }
`;

// const LoadableDetails = Loadable({
//   loader: () => import("./Details"),
//   loading() {
//     return <h1>loading split out code...</h1>;
//   }
// });

class App extends React.Component {
  render() {
    return (
      <div>
        <Global styles={globalStyles} />
        <NavBar />
        <Provider store={store}>
          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
