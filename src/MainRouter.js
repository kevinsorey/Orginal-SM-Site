import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./basics/core/Home";
import Signup from "./basics/user/Signup";
import Signin from "./basics/user/Signin";



const MainRouter = () => (
    <div>
        
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signin" component={Signin} />
            </Switch>
        
    </div>
    );

    export default MainRouter;
    