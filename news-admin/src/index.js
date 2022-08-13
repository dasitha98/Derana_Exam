import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./assets/scss/dashlite.scss";
import "./assets/scss/style-email.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, componse, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

const Error404Modern = lazy(() => import("./pages/error/404-modern"));

// const store = createStore(reducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <Suspense fallback={<div />}>
        <Router basename={`/`}>
          <Route render={({ location }) => (location.state && location.state.is404 ? <Error404Modern /> : <App />)} />
        </Router>
      </Suspense>
    </React.Fragment>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
