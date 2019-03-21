const $on = (target, event, handler) => {
  return target.addEventListener(event, handler);
};

const format = (value, unit = "") => {
  const beginning = Math.floor(value / 1000);
  if (!beginning) return value;
  const numberFormatted = `${format(beginning)}.${value.toString().slice(-3)}`;
  return unit ? `${numberFormatted} ${unit}` : numberFormatted;
};

export { $on, format };
