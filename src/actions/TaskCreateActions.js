import axios from 'axios';
import _ from 'lodash';
import { serviceBaseURL } from './ActionsConfig';

export const startTaskCreate = () => {
  return {
    type: 'TASK_CREATE_STARTED'
  };
}

export const changeTaskCreate = ({ Name, Date, Owner, Done }) => {
  return {
    type: 'TASK_CREATE_CHANGED',
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

export const createTask = ({ Name, Date, Owner, Done }, successCallback) => {
  return (dispatch) => {
    const validationResult = validateTask({ Name, Date, Owner, Done });
    dispatch({
      type: 'TASK_CREATE_VALIDATION_CHANGED',
      payload: validationResult.validation
    });
    if (validationResult.isValid) {
      dispatch({
        type: 'TASK_CREATE_LOADING',
        payload: true
      });
      axios.post(`${serviceBaseURL}api/task`, { Name, Date, Owner, Done })
        .then(function (response) {
          dispatch({
            type: 'TASK_CREATED',
            payload: { Id: response.data, Name, Date, Owner, Done }
          });
          dispatch({
            type: 'TASK_CREATE_LOADING',
            payload: false
          });
          if(successCallback){
            successCallback();
          }
        })
        .catch(function (error) {
          dispatch({
            type: 'TASK_CREATE_LOADING',
            payload: false
          });
          console.log(error);
        });
    }
  };
};
