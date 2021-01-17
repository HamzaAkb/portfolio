import logo from "./logo.svg";
import "./App.css";
import store from "./store/store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import Routes from "./routes";

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes history={history} />
      </Router>
    </Provider>
  );
}

export default App;
