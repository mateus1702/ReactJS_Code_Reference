import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { readTask } from '../../actions';
import Loading from '../shared/Loading';
import Footer from '../footer/Footer';

class TaskRead extends Component {
  componentWillMount() {
    this.props.readTask(this.props.match.params.Id);
  }

  render() {
    if (this.props.loading) {
      return (
        <Loading />
      );
    }

    return (
      <div className="container body-content">
          <h2>Details</h2>
          <div>
              <h4>Task</h4>
              <hr />
              <dl className="dl-horizontal">
                  <dt>
                      Name
                  </dt>
                  <dd>
                      {this.props.Name}
                  </dd>
                  <dt>
                      Date
                  </dt>
                  <dd>
                      {this.props.Date && this.props.Date.toLocaleDateString()}
                  </dd>
                  <dt>
                      Owner
                  </dt>
                  <dd>
                      {this.props.Owner}
                  </dd>
                  <dt>
                      Done
                  </dt>
                  <dd>
                      <input checked={this.props.Done ? "checked" : ""} className="check-box" disabled="disabled" type="checkbox" />
                  </dd>
              </dl>
          </div>
          <p>
              <Link to={`/task/update/${this.props.match.params.Id}`}>
                Edit
              </Link> |
              <Link to='/task'>
                Back to List
              </Link>
          </p>
          <hr />
          <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, oldState) => {
  return state.taskRead;
}

export default connect(mapStateToProps,{ readTask })(TaskRead);
