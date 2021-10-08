import './App.css';
import Login from './Pages/login/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Facebook from './Pages/Facebook/Facebook';
import Freinds from './Pages/freinds/Freinds';
import EmailVarification from './Pages/login/EmailVarification';
import Profile from './Pages/ProfilePage/Profile';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Facebook" component={Facebook} />
        <Route path="/Freinds" component={Freinds} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>

  );
}

export default App;