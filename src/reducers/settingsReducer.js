/** Import actions */
import {
  TOGGLE_MENU,
  UPDATE_WINDOW_WIDTH,
} from 'src/actions/settings';

const initialState = {
  latitude: 49.369682,
  longitude: -0.871084,
  displaySampleData: false,
  responsiveMenu: false,
  windowWidth: window.innerWidth,
};

function settingsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        responsiveMenu: !state.responsiveMenu,
      };
    case UPDATE_WINDOW_WIDTH:
      return {
        ...state,
        windowWidth: action.windowWidth,
      };
    default:
      return state;
  }
}

export default settingsReducer;
