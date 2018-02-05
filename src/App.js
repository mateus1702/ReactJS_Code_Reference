import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import reducers from './reducers';
import Header from './components/header/Header';
import Home from './components/Home';
import TaskList from './components/task/TaskList';
import TaskCreate from './components/task/TaskCreate';
import TaskUpdate from './components/task/TaskUpdate';
import TaskRead from './components/task/TaskRead';
import TaskDelete from './components/task/TaskDelete';
import './App.css';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router>
            <div>
              <Header />
              <Switch>
                <Route exact path="/task" component={TaskList}/>
                <Route path="/task/create" component={TaskCreate}/>
                <Route path="/task/update/:Id" component={TaskUpdate}/>
                <Route path="/task/read/:Id" component={TaskRead}/>
                <Route path="/task/delete/:Id" component={TaskDelete}/>
                <Route component={Home}/>
              </Switch>
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
