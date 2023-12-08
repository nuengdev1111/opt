export const truncateDecimals = function (number, digits) {
  const multiplier = Math.pow(10, digits)
  const adjustedNum = number * multiplier
  const truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum)
  return truncatedNum / multiplier
}

export const numberWithCommas = (number) => {
  if (!number) return;
  const parts = number.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

