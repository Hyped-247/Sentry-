import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
    dsn: 'DSN',
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
    debug: true,
    release: "testRelease"
});


const App = () => (
    <AppRouter />
);


// load the web application
// ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.createRoot(document.getElementById('app')).render(<App />);
