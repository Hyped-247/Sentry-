import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
    dsn: 'https://fc3954ffb97547599fb291d4b3119c5c@o4504521040723968.ingest.sentry.io/4504521041969152',
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
});


const App = () => (
    <AppRouter />
);


// load the web application
// ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.createRoot(document.getElementById('app')).render(<App />);
