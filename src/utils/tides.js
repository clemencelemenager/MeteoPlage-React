/**
 * Translate tide information in french
 *
 * @param string tideType : data transmitted in english from API
 */
export const translateTideType = (tideType) => {
  if (tideType === 'HIGH TIDE') {
    return 'haute';
  }
  if (tideType === 'LOW TIDE') {
    return 'basse';
  }
  return 'NC';
};

/**
 * Get tide status depending of next tide type
 *
 * @param string tideType : tide low or high
 */
export const getTideStatus = (nextTideState) => {
  if (nextTideState === 'haute') {
    return 'La mer monte';
  }
  if (nextTideState === 'basse') {
    return 'La mer descend';
  }
  return 'NC';
};

/**
 * Get hh:mm format from date
 *
 */
export const getTideTime = (date) => {
  const time = new Date(date);
  let hour = time.getHours();
  let minute = time.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return `${hour}:${minute}`;
};

/**
 * Get unix timestamp for now
 * Truncate the last 3 numbers of unix timestamp date to correspond with tides API format
 */
export const truncateNow = (now) => {
  const nowString = now.toString();
  const nowTrunc = nowString.substring(0, 10);
  const nowTruncInt = parseInt(nowTrunc, 10);
  return nowTruncInt;
};