import React from "react";

import GlobalStyle from "./styles/GlobalStyle";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/Header";
import Routes from "./routes";
import history from "./services/history";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
