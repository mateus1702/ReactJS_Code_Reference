const INITIAL_STATE = {
  Name: "",
  Date: "",
  Owner: "",
  Done: false,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TASK_READ_FOR_DELETE':
      return { ...action.payload, Date: new Date(action.payload.Date), loading: state.loading };
    case 'TASK_DELETE_LOADING':
      return { ...state, loading: action.payload };
    case 'TASK_DELETED':
      return INITIAL_STATE;
    default:
      return state;
  }
};
