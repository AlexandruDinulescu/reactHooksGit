import { reducer1 } from "./reducers/reducer1";
import { reducer2 } from "./reducers/reducer2";

function globalReducer(state, action) {
  console.log("===================== SEPARATOR =========================");
  console.log("Old state is:");
  console.log(state);
  let obj = {
    ...reducer1(state, action),
    ...reducer2(state, action)
  }
  console.log("New State Is:")
  console.log(obj);

  // Quick and dirty way si JSON.stringify but javascript objects do not guarantee property order so if needed use lodash is_equal or roll your own version
  console.log(JSON.stringify(state));
  console.log(JSON.stringify(obj));
  // hack because no default state can be achieved 
  try {
    if (JSON.stringify(state) === JSON.stringify(obj)) {
      switch (action.type) {
        // Custom Fallback for same state after individual action payload.
        case "throw_error":
          console.log("throw_error");
          break;

        default:
          break;
      }

      throw new Error('same state');
    }
  }
  catch (e) {
    console.error(e.name + ":" + e.message)
  }

  return {
    ...reducer1(state, action),
    ...reducer2(state, action)
  }
}

export { globalReducer }
