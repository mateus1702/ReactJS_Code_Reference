import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer/Footer';
class Projects extends Component {
  render() {
    return (
      <div className="container body-content">
          <div className="jumbotron">
              <h1>React</h1>
              <p className="lead">React Bootstrap with a basic CRUD.</p>
              <p>
                <Link className="btn btn-primary btn-lg" to='/task'>
                 Click here to CRUD!
                </Link>
              </p>
          </div>
          <hr />
          <Footer />
      </div>
    );
  }
}

export default Projects;
