export function getDatFromString(dateString){
  const tokens = dateString.split('-');
  const year = Number(tokens[0]);
  const month = Number(tokens[1]) - 1;
  const day = Number(tokens[2]);
  return new Date(year, month, day);
};