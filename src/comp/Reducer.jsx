function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "INCREMENT_BY_VALUE":  
      return { count: state.count + action.payload };
    case "DOUBLE":
      return { count: state.count * 2 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

export default reducer;
