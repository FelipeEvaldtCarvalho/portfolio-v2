export const required = (value) => value !== "";

export const max = (value, max) => value.length <= max;

export const min = (value, min) => value.length >= min;

export const email = (value) =>
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
