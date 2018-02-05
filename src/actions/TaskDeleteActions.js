import axios from 'axios';
import { serviceBaseURL } from './ActionsConfig';

export const readTaskForDelete = (Id) => {
  return (dispatch) => {
      dispatch({
        type: 'TASK_DELETE_LOADING',
        payload: true
      });
      axios.get(`${serviceBaseURL}api/task/${Id}`)
        .then(function (response) {
          dispatch({
            type: 'TASK_READ_FOR_DELETE',
            payload: response.data
          });
          dispatch({
            type: 'TASK_DELETE_LOADING',
            payload: false
          });
        })
        .catch(function (error) {
          dispatch({
            type: 'TASK_DELETE_LOADING',
            payload: false
          });
          console.log(error);
        });
  };
};

export const deleteTask = (Id, successCallback) => {
  return (dispatch) => {
    dispatch({
      type: 'TASK_DELETE_LOADING',
      payload: true
    });
    axios.delete(`${serviceBaseURL}api/task/${Id}`)
      .then(function (response) {
        dispatch({
          type: 'TASK_DELETED',
          payload: { Id }
        });
        dispatch({
          type: 'TASK_DELETE_LOADING',
          payload: false
        });
        if(successCallback){
          successCallback();
        }
      })
      .catch(function (error) {
        dispatch({
          type: 'TASK_DELETE_LOADING',
          payload: false
        });
        console.log(error);
      });
  };
};
