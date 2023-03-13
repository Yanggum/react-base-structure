import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import "./assets/css/styles.scss";

import { createRoot } from 'react-dom/client';
import {StrictMode} from "react";
import {BrowserRouter} from "react-router-dom";
const rootElement = document.getElementById('root');
const root = createRoot(rootElement!); // createRoot(container!) if you use TypeScript

root.render(
    <StrictMode>
        <Provider store={store} >
            <BrowserRouter>
            <App />
            </BrowserRouter>
        </Provider>
    </StrictMode>
);
