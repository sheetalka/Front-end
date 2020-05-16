import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Container/App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";

ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));
serviceWorker.unregister();
