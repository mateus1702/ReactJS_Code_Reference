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
    case 'TASK_CREATE_CHANGED':
      return {
        ...state,
        Name: action.payload.Name,
        Date: action.payload.Date,
        Owner: action.payload.Owner,
        Done: action.payload.Done
      };
    case 'TASK_CREATE_VALIDATION_CHANGED':
      return { ...state, validation: action.payload };
    case 'TASK_CREATE_LOADING':
      return { ...state, loading: action.payload };
    case 'TASK_CREATE_STARTED':
    case 'TASK_CREATED':
      return INITIAL_STATE;
    default:
      return state;
  }
};
