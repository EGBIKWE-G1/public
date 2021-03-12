import React from "react";
import UserLoginStyle from "./Components/UserLoginStyle";
import UserSignup from "./Components/UserSignup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserForgetPassword from "./Components/UserForgetPassword";
export default function App() {
  return (
    <div>      
      <Router>
        <Switch>
          <Route path="/login" component={UserLoginStyle} exact />
          <Route path="/register" component={UserSignup} />
          <Route path="/forget-password" component={UserForgetPassword} />
        </Switch>
      </Router>
    </div>
  );
}
