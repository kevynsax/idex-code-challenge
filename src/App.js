import React from 'react';
import './App.css';
import Sidebar from "./components/sidebar";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Profile from "./components/profile";
import ContactUs from "./components/contact-us";

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar/>
                <Switch>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route path="/contactUs">
                        <ContactUs/>
                    </Route>
                    <Route path="/" exact={true}>
                        <Profile/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
