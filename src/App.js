import './App.css';
import Login from './Pages/login/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Facebook from './Pages/Facebook/Facebook';
import Freinds from './Pages/freinds/Freinds';

function App() {

    return (  
    <Router>
        <Switch>
          <Route exact path="/"><Login /></Route>
          <Route path="/Facebook" component="Facebook"><Facebook />  </Route>
          <Route path="/Freinds" component="Freinds"><Freinds />  </Route>

        </Switch>
    </Router>

    );
}

export default App;