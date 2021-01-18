import "./App.css";
import store from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./routes";
import { createBrowserHistory } from "history";

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
