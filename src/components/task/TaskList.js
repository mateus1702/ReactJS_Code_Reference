import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer';
import { listTask } from '../../actions';
import Loading from '../shared/Loading';

class TaskList extends Component {
  componentWillMount() {
    this.props.listTask();
  }
  render() {
    if (this.props.loading) {
      return (
        <Loading />
      );
    }

    return (
      <div className="container body-content">
         <h2>Index</h2>
         <p>
             <Link to='/task/create'>
              Create New
             </Link>
         </p>
         <table className="table">
             <tbody>
                 <tr>
                     <th>
                         Name
                     </th>
                     <th>
                         Date
                     </th>
                     <th>
                         Owner
                     </th>
                     <th>
                         Done
                     </th>
                     <th></th>
                 </tr>
                 {this.props.tasks.map((task) =>
                   <tr key={task.Id}>
                       <td>
                            {task.Name}
                       </td>
                       <td>
                           {task.Date.toLocaleDateString()}
                       </td>
                       <td>
                           {task.Owner}
                       </td>
                       <td>
                           <input checked={task.Done ? "checked" : ""} className="check-box" disabled="disabled" type="checkbox" />
                       </td>
                       <td>
                           <Link to={`task/update/${task.Id}`}>
                              Edit
                           </Link> |
                           <Link to={`task/read/${task.Id}`}>
                              Details
                           </Link> |
                           <Link to={`task/delete/${task.Id}`}>
                              Delete
                           </Link>
                       </td>
                   </tr>
                 )}
             </tbody>
         </table>
         <hr />
         <Footer />
     </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    loading: state.taskList.loading
  };
}

export default connect(mapStateToProps, { listTask })(TaskList);
