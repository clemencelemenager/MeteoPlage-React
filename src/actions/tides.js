export const FETCH_TIDES = 'FETCH_TIDES';
export const SAVE_DAILY_TIDES = 'SAVE_DAILY_TIDES';
export const SAVE_ALL_TIDES = 'SAVE_ALL_TIDES';
export const SAVE_ORIGIN_TIDES = 'SAVE_ORIGIN_TIDES';

export const fetchTides = () => ({
  type: FETCH_TIDES,
});

export const saveDailyTides = (tidesOfTheDay) => ({
  type: SAVE_DAILY_TIDES,
  tidesOfTheDay,
});

export const saveAllTides = (tidesData) => ({
  type: SAVE_ALL_TIDES,
  tidesData,
});

export const saveOriginTides = (origin) => ({
  type: SAVE_ORIGIN_TIDES,
  origin,
});
