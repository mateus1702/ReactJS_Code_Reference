import axios from 'axios';
import { serviceBaseURL } from './ActionsConfig';

export const listTask = () => {
  return (dispatch) => {
    dispatch({
      type: 'TASK_LIST_LOADING',
      payload: true
    });
    axios.get(`${serviceBaseURL}api/task`)
      .then(function (response) {
        dispatch({
          type: 'TASK_LISTED',
          payload: response.data
        });
        dispatch({
          type: 'TASK_LIST_LOADING',
          payload: false
        });
      })
      .catch(function (error) {
        dispatch({
          type: 'TASK_LIST_LOADING',
          payload: false
        });
        console.log(error);
      });
  };
};
