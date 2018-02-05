import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTask, readTaskForDelete } from '../../actions';
import Loading from '../shared/Loading';
import Footer from '../footer/Footer';

class TaskDelete extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.readTaskForDelete(this.props.match.params.Id);
  }

  handleSubmit(event) {
    this.props.deleteTask(this.props.match.params.Id, () => {
      this.props.history.push({
        pathname: '/task'
      });
    });
    event.preventDefault();
  }

  render() {
    if (this.props.loading) {
      return (
        <Loading />
      );
    }

    return (
      <div className="container body-content">
          <h2>Delete</h2>
          <h3>Are you sure you want to delete this?</h3>
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
              <form onSubmit={this.handleSubmit}>
                  <div className="form-actions no-color">
                      <input value="Delete" className="btn btn-default" type="submit" /> |
                      <Link to='/task'>
                        Back to List
                      </Link>
                  </div>
              </form>
          </div>
          <hr />
          <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, oldState) => {
  return state.taskDelete;
}

export default connect(mapStateToProps, { deleteTask, readTaskForDelete })(TaskDelete);
