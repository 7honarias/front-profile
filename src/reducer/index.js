const inicialState = {
  portfile: {},
  repositories: [],
};

function rootReducer(state = inicialState, action) {
  switch (action.type) {
    case "GET_PORTFILE":
      return {
        ...state,
        dogs: action.payload,
        portfile: action.payload,
      };
    case "GET_REPOS":
      return {
        ...state,
        repositories: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
