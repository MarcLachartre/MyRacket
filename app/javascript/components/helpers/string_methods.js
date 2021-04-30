export const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

export const date_format = (dateString) => {
  return dateString.substring(0, dateString.length - 14)
}