import React from 'react';
import './App.scss';
import {NavLink, Switch, Route} from 'react-router-dom'; 
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
    return (
        <div className="App">
            <header>
                <nav className="navigation">
                    <ul className="navigation--list">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <section className="route--content padding-20">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </section>
        </div>
    );
}

export default App;
