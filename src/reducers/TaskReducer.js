const INITIAL_STATE = [];

const tasks = (state = [], action) => {
  switch (action.type) {
    case 'TASK_LISTED':
      return action.payload.map((task) => {
        return { ...task , Date: new Date(task.Date)};
      });
    case 'TASK_CREATED':
      return [
        { ...action.payload, Date: new Date(action.payload.Date)},
        ...state
      ];
    case 'TASK_DELETED':
      return [ ...state ].filter((model) => {
          return model.Id !== action.payload.Id;
        });
    case 'TASK_UPDATED':
      return state.map((model) => {
        if (model.Id === action.payload.Id) {
          return action.payload;
        }
        return model;
      });
    default:
      return state;
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TASK_LISTED':
    case 'TASK_CREATED':
    case 'TASK_DELETED':
    case 'TASK_UPDATED':
      return tasks(state, action);
    default:
      return state;
  }
};
