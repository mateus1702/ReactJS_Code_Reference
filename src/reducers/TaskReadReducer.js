const INITIAL_STATE = {
  Name: "",
  Date: "",
  Owner: "",
  Done: false,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TASK_READ':
      return { ...action.payload, Date: new Date(action.payload.Date), loading: state.loading };
    case 'TASK_READ_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
