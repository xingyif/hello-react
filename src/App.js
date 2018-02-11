import React, { Component, Text } from 'react';
import './Assets/css/default.min.css';
import './Assets/css/App.css';

// import logo from './logo.svg';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Aboutme from './components/pages/aboutme';
import Projects from './components/pages/projects';
import Contacts from './components/pages/contacts';
import Main from './components/pages/main';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="App">
                        <Header />

                        <Route exact path='/Aboutme' component={Aboutme}/>
                        <Route exact path='/Projects' component={Projects}/>
                        <Route exact path='/Contacts' component={Contacts}/>
                        <Main />
                        <Footer />

                    </div>
                </Router>
            </div>

        );
    }
}

export default App;
