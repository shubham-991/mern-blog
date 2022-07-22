import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home"
import Single from "./pages/home/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);

  return (
    <Router>
      <Switch>

      <Route path='/post/:postID'>
          <TopBar/>
          <Single/>
      </Route>

      <Route path ='/settings'>
          <TopBar/>
          {user ? <Settings/> : <Register/>}
        </Route>

      <Route path ='/write'>
          <TopBar/>
          {user ? <Write/> : <Register/>}
        </Route>

        <Route path='/login'>
          <TopBar/>
          {user ? <Home/> : <Login/>}
        </Route>
        
        <Route path='/register'>
          <TopBar/>
          {user ? <Home/> : <Register/>}
          <Register/>
        </Route>

        <Route path='/'>
          <TopBar/>
          <Home/>
        </Route>

      </Switch>
    </Router>
    
  );
} 

export default App;
