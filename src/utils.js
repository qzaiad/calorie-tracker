/**
 * Shared helper functions used across the app.
 */

/**
 * Converts a date string in `YYYY-MM-DD` format (as produced by
 * `<input type="date">`) into a native `Date` object.
 *
 * Note: `new Date("YYYY-MM-DD")` would be parsed as UTC midnight, which can
 * shift the day backwards for users west of UTC. Building the date from
 * numeric parts keeps it in the local time zone instead.
 *
 * @param {string} dateString - Date in `YYYY-MM-DD` format.
 * @returns {Date} Local-time `Date` for the given day.
 */
export function getDateFromString(dateString){
  const tokens = dateString.split('-');
  const year = Number(tokens[0]);
  // JS months are 0-based, so January is 0 -> subtract 1 from the input month.
  const month = Number(tokens[1]) - 1;
  const day = Number(tokens[2]);
  return new Date(year, month, day);
};
