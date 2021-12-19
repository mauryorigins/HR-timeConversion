/* eslint-disable no-else-return */
export default function timeConversion(s: string): string {
  // Write your code here
  const newHour = s.slice(2, -2);
  const AMorPM = s.slice(8, 10);
  const hrs = s.slice(0, 2);
  const format24 = Number(hrs) + 12;
  let formato24 = '';
  if (AMorPM === 'AM' && format24 === 24) {
    formato24 = '00';
  } else if (AMorPM === 'PM' && format24 === 24) {
    formato24 = '12';
  } else if (AMorPM === 'AM') {
    formato24 = String(hrs);
  } else if (AMorPM === 'PM') {
    formato24 = String(format24);
  }
  return formato24.concat(newHour);
}
