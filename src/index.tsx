import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/es/integration/react";
import { persistStore } from "redux-persist";
import { store } from "@Redux/Reducers";

import "./index.css";
import App from "./App";

const persistor = persistStore(store);

ReactDOM.render(
    <Router basename="WhoGoesFirst">
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </Router>,
    document.getElementById("root")
);
