import { combineReducers } from 'redux';
import TaskReducer from './TaskReducer';
import TaskListReducer from './TaskListReducer';
import TaskCreateReducer from './TaskCreateReducer';
import TaskUpdateReducer from './TaskUpdateReducer';
import TaskReadReducer from './TaskReadReducer';
import TaskDeleteReducer from './TaskDeleteReducer';

export default combineReducers({
  tasks: TaskReducer,
  taskList: TaskListReducer,
  taskCreate: TaskCreateReducer,
  taskUpdate: TaskUpdateReducer,
  taskRead: TaskReadReducer,
  taskDelete: TaskDeleteReducer
});
