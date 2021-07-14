export function toCelcius(temp) {
  return Math.floor(temp - 273.15);
}

export function toFahrenheit(temp) {
  const convertedToCelcius = Math.floor(temp - 273.15);
  return Math.floor(convertedToCelcius * 1.8 + 32);
}
