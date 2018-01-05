import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
     <header>

        <div className="Header">
        <h1>Yifan Xing</h1>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/Aboutme">About Me</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/Contacts">Contacts</Link>
            </li>
          </ul>
        </nav>

     </header>
    );
  }
}

export default Header;
