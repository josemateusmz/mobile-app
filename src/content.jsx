import React from "react";
import { Switch, Route } from "react-router-dom";
import { Store } from "./pages/store";
import { Cart } from "./pages/Cart/Cart"
import { Login } from "./Login/login";
import { Profile } from "./pages/profile";
import { ProfileEdit} from "./pages/ProfileEdit"

export const Content = () => {
    return (
        <Switch>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/profile/edit" component={ProfileEdit}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/Store" component={Store}/>  
            <Route exact path="/" component={Login}/>
        </Switch>

    );
};