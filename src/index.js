import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <Provider
    store={createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <Suspense fallback={<div>Cargando App</div>}>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById("root")
);
