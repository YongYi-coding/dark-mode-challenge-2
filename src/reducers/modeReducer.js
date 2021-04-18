import { MODE } from "../actions/modeAction";

const initialState = {
    isDarkMode: false,
}

const modeReducer = (state = initialState, action) => {
  switch (action) {
    case MODE:
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
};

export default modeReducer;
