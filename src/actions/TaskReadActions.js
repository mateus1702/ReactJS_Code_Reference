import axios from 'axios';
import { serviceBaseURL } from './ActionsConfig';

export const readTask = (Id) => {
  return (dispatch) => {
      dispatch({
        type: 'TASK_READ_LOADING',
        payload: true
      });
      axios.get(`${serviceBaseURL}api/task/${Id}`)
        .then(function (response) {
          dispatch({
            type: 'TASK_READ',
            payload: response.data
          });
          dispatch({
            type: 'TASK_READ_LOADING',
            payload: false
          });
        })
        .catch(function (error) {
          dispatch({
            type: 'TASK_READ_LOADING',
            payload: false
          });
          console.log(error);
        });
  };
};
