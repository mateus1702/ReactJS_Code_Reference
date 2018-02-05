import dateformat from 'dateformat';

const INITIAL_STATE = {
  Name: "",
  Date: "",
  Owner: "",
  Done: false,
  validation: {
    nameRequiredOk: true,
    dateRequiredOk: true
  },
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TASK_READ_FOR_UPDATE':
      return { ...action.payload, Date: dateformat(action.payload.Date,"yyyy-mm-dd"), validation: INITIAL_STATE.validation};
    case 'TASK_UPDATE_CHANGED':
      return {
        ...state,
        Name: action.payload.Name,
        Date: action.payload.Date,
        Owner: action.payload.Owner,
        Done: action.payload.Done
      };
    case 'TASK_UPDATE_VALIDATION_CHANGED':
      return { ...state, validation: action.payload };
    case 'TASK_UPDATE_LOADING':
      return { ...state, loading: action.payload };
    case 'TASK_UPDATED':
      return INITIAL_STATE;
    default:
      return state;
  }
};
