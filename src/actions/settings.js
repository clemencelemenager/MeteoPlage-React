export const STOP_LOADING = 'STOP_LOADING';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const UPDATE_WINDOW_WIDTH = 'UPDATE_WINDOW_WIDTH';

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
