import { Decrement_reducer } from "./reducer2_cases/Decrement_Reducer";

function reducer2(state, action) {
  switch (action.type) {
    case "decrement": {
      return Decrement_reducer(state, action);
    }
  }
}

export { reducer2 }
