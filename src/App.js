import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Home from "./pages/home";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Browse from "./pages/Browse";
import IsUserRedirect from "./helpers/routes";
import AuthListener from "./hooks/auth-listener";

function App() {
  const { user } = AuthListener();
  return (
    <Router className="App">
      <Route exact path={ROUTES.HOME} component={Home} />
      <IsUserRedirect
        exact
        path={ROUTES.BROWSE}
        component={Browse}
        user={user}
      />
      <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
      <Route exact path={ROUTES.SIGN_UP} component={Signup} />
    </Router>
  );
}

export default App;
