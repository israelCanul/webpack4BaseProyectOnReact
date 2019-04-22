import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const App = React.lazy(() => import("./App"));

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<div>Cargando App</div>}>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById("root")
);
