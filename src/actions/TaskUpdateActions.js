import axios from 'axios';
import _ from 'lodash';
import { serviceBaseURL } from './ActionsConfig';

export const readTaskForUpdate = (Id) => {
  return (dispatch) => {
      dispatch({
        type: 'TASK_UPDATE_LOADING',
        payload: true
      });
      axios.get(`${serviceBaseURL}api/task/${Id}`)
        .then(function (response) {
          dispatch({
            type: 'TASK_READ_FOR_UPDATE',
            payload: response.data
          });
          dispatch({
            type: 'TASK_UPDATE_LOADING',
            payload: false
          });
        })
        .catch(function (error) {
          dispatch({
            type: 'TASK_UPDATE_LOADING',
            payload: false
          });
          console.log(error);
        });
  };
};


export const changeTaskUpdate = ({ Name, Date, Owner, Done }) => {
  return {
    type: 'TASK_UPDATE_CHANGED',
    payload: { Name, Date, Owner, Done }
  };
};

const validateTask = ({ Name, Date, Owner, Done }) => {
  const validation = {
    nameRequiredOk: true,
    dateRequiredOk: true
  };

  if (!Name) {
    validation.nameRequiredOk = false;
  }

  if (!Date) {
    validation.dateRequiredOk = false;
  }

  let isValid = true;
  _.forEach(validation, (value, key) => {
    isValid = isValid && value;
  });

  return { validation, isValid };
}

export const updateTask = (Id, { Name, Date, Owner, Done }, successCallback) => {
  return (dispatch) => {
    const validationResult = validateTask({ Name, Date, Owner, Done });
    dispatch({
      type: 'TASK_UPDATE_VALIDATION_CHANGED',
      payload: validationResult.validation
    });
    if (validationResult.isValid) {
      dispatch({
        type: 'TASK_UPDATE_LOADING',
        payload: true
      });
      axios.put(`${serviceBaseURL}api/task/${Id}`, { Name, Date, Owner, Done })
        .then(function (response) {
          dispatch({
            type: 'TASK_UPDATED',
            payload: { Id, Name, Date, Owner, Done }
          });
          dispatch({
            type: 'TASK_UPDATE_LOADING',
            payload: false
          });
          if(successCallback){
            successCallback();
          }
        })
        .catch(function (error) {
          dispatch({
            type: 'TASK_UPDATE_LOADING',
            payload: false
          });
          console.log(error);
        });
    }
  };
};
