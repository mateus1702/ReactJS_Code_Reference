import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-inverse navbar-fixed-top">
         <div className="container">
             <div className="navbar-header">
                 <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                 </button>
                 <Link className="navbar-brand" to='/'>
                    React Bootstrap
                 </Link>
             </div>
             <div className="navbar-collapse collapse">
                 <ul className="nav navbar-nav">
                     <li>
                       <Link to='/'>
                        Home
                       </Link>
                     </li>
                     <li>
                       <Link to='/task'>
                        CRUD
                       </Link>
                     </li>
                 </ul>
             </div>
         </div>
     </div>
    );
  }
}

export default Header;
