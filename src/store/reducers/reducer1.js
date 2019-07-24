import { Increment_reducer } from "./reducer1_cases/Increment_Reducer";
import { Throw_Error } from "./reducer1_cases/Throw_Error";

function reducer1(state, action) {
  switch (action.type) {
    case "increment": {
      return Increment_reducer(state, action);
    }
    case "throw_error": {
      return Throw_Error(state, action);
    }
  }
}

export { reducer1 } 
