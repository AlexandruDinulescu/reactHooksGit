function Decrement_reducer(state, action) {
  console.log(action);
  const modifiedValue = state.count - action.payload;

  return {
    ...state,
    count: modifiedValue,
  }
}

export { Decrement_reducer }
