/**
 * Get icon URL from icon code
 * @param string icon : code given by API open weather map
 * @return string iconURL : url to display weather icon in img element
 */
export const getWeatherIconUrl = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

/**
 * Display text with first letter in upper case
 * @param string text  : text to display with upper case
 * @return string text with first letter in upper case
 */
export const capitalizeFirstLetter = (text) => text[0].toUpperCase() + text.slice(1);
