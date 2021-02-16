/**
 * Convert speed from m/s to km/h
 * @param number speed in m/s
 */
export const getKmhSpeed = (speedData) => Math.round(speedData * 3.6);

/**
 * Convert degrees in cardinal direction
 * @param number windDegree
 */
// eslint-disable-next-line consistent-return
export const getCardinalDirection = (windDegree) => {
  // console.log(windDegree);
  if (windDegree >= 348.75 || windDegree < 11.25) {
    return 'Nord';
  }
  if (windDegree >= 11.25 && windDegree < 33.75) {
    return 'Nord Nord-Est';
  }
  if (windDegree >= 33.75 && windDegree < 56.25) {
    return 'Nord-Est';
  }
  if (windDegree >= 56.25 && windDegree < 78.75) {
    return 'Est Nord-Est';
  }
  if (windDegree >= 78.75 && windDegree < 101.25) {
    return 'Est';
  }
  if (windDegree >= 101.25 && windDegree < 123.75) {
    return 'Est Sud-Est';
  }
  if (windDegree >= 123.75 && windDegree < 146.25) {
    return 'Sud-Est';
  }
  if (windDegree >= 146.25 && windDegree < 168.75) {
    return 'Sud Sud-Est';
  }
  if (windDegree >= 168.75 && windDegree < 191.25) {
    return 'Sud';
  }
  if (windDegree >= 191.25 && windDegree < 213.75) {
    return 'Sud Sud-Ouest';
  }
  if (windDegree >= 213.75 && windDegree < 236.25) {
    return 'Sud-Ouest';
  }
  if (windDegree >= 236.25 && windDegree < 258.75) {
    return 'Ouest Sud-Ouest';
  }
  if (windDegree >= 258.75 && windDegree < 281.25) {
    return 'Ouest';
  }
  if (windDegree >= 281.25 && windDegree < 303.75) {
    return 'Ouest Nord-Ouest';
  }
  if (windDegree >= 303.75 && windDegree < 326.25) {
    return 'Nord-Ouest';
  }
  if (windDegree >= 326.25 && windDegree < 348.75) {
    return 'Nord Nord-Ouest';
  }
  return 'undefined';
};

/**
 * Display a description of sea depending of the wave height
 */
export const getWaveDescription = (waveHeight) => {
  if (waveHeight < 0.5) {
    return 'Mer calme';
  }
  if (waveHeight >= 0.5 && waveHeight < 1) {
    return 'Mer agitée';
  }
  if (waveHeight >= 1 && waveHeight < 2) {
    return 'Mer très agitée !';
  }
  if (waveHeight >= 2) {
    return "Wahou c'est la tempête!";
  }
  return 'undefined';
};

/**
 * Convert visibility value into a text description
 *
 * @param integer visibility : value in meters
 * @return string visibility description
 */
export const getVisibilityText = (visibility) => {
  if (visibility >= 10000) {
    return 'Bonne visibilité';
  }
  if (visibility >= 5000 && visibility < 10000) {
    return 'Visibilité moyenne';
  }
  if (visibility > 0 && visibility < 5000) {
    return 'Mauvaise visibilité';
  }
  if (visibility == 0) {
    return 'Très mauvaise visibilité';
  }
  return 'Undefined';
};
