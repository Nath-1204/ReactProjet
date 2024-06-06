import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Topics from './topics'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/about">About</Link> </li>
                        <li> <Link to="/topics">Topics</Link> </li>
                    </ul>
                    
                    <hr />

                    <Routes>
                        <Route exact path="/" Component={ Home }/>
                        <Route  path="/about" Component={ About }/>
                        <Route  path="/topics" Component={ Topics }/>
                    </Routes>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
