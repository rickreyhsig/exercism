/*export const isLeap = (year) => {
  if (year % 4 == 0 && year % 100 != 0 ) return true;
  else if (year % 100 == 0 && year % 400 == 0) return true;
  return false;
};*/

export const isLeap = (year) =>
      ((year % 4) === 0 && ((year % 100) !== 0 || (year % 400) === 0));
