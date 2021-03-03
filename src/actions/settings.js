export const STOP_LOADING = 'STOP_LOADING';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const UPDATE_WINDOW_WIDTH = 'UPDATE_WINDOW_WIDTH';
export const UPDATE_CITY = 'UPDATE_CITY';
export const TOGGLE_EDIT_CITY = 'TOGGLE_EDIT_CITY';
export const SAVE_CITY = 'SAVE_CITY';
export const FETCH_COORDINATES = 'FETCH_COORDINATES';
export const SAVE_COORDINATES = 'SAVE_COORDINATES';

export const stopLoading = () => ({
  type: STOP_LOADING,
});

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const updateWindowWidth = (newValue) => ({
  type: UPDATE_WINDOW_WIDTH,
  windowWidth: newValue,
});

export const updateCity = (newValue) => ({
  type: UPDATE_CITY,
  inputCity: newValue,
});

export const toggleEditCity = () => ({
  type: TOGGLE_EDIT_CITY,
});

export const saveCity = () => ({
  type: SAVE_CITY,
});

export const fetchCoordinates = () => ({
  type: FETCH_COORDINATES,
});

export const saveCoordinates = (latitude, longitude, city, region) => ({
  type: SAVE_COORDINATES,
  latitude,
  longitude,
  city,
  region,
});
