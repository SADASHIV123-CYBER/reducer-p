const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + 1, history: [...state.history, state.count + 1] };
      case "DECREMENT":
        return { ...state, count: state.count - 1, history: [...state.history, state.count - 1] };
      case "INCREMENT_BY_VALUE":
        return { ...state, count: state.count + action.payload, history: [...state.history, state.count + action.payload] };
      case "MULTIPLY":
        return { ...state, count: state.count * action.payload, history: [...state.history, state.count * action.payload] };
      case "DIVIDE":
        return { ...state, count: Math.floor(state.count / action.payload), history: [...state.history, Math.floor(state.count / action.payload)] };
      case "RESET":
        return { ...state, count: 0, history: [...state.history, 0] };
      case "TOGGLE_THEME":
        return { ...state, darkMode: !state.darkMode };
      default:
        return state;
    }
  };
  
  export default reducer;
  