/** Import actions */
import {
  TOGGLE_MENU,
  UPDATE_WINDOW_WIDTH,
  UPDATE_CITY,
  TOGGLE_EDIT_CITY,
  SAVE_CITY,
  SAVE_COORDINATES,
} from 'src/actions/settings';

const initialState = {
  latitude: 49.290992,
  longitude: -0.307655,
  city: 'Hermanville-sur-mer',
  region: '14, Calvados, Normandie',
  inputCity: '',
  editCity: false,
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
    case UPDATE_CITY:
      return {
        ...state,
        inputCity: action.inputCity,
      };
    case TOGGLE_EDIT_CITY:
      return {
        ...state,
        editCity: !state.editCity,
      };
    case SAVE_CITY:
      return {
        ...state,
        city: state.inputCity,
        inputCity: '',
        editCity: !state.editCity,
      };
    case SAVE_COORDINATES:
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude,
        region: action.region,
        city: action.city,
      };
    default:
      return state;
  }
}

export default settingsReducer;
