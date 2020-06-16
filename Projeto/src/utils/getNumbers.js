const getNumbers = (value) => {
  const currency = value.replace(/,/g, '.').replace(/(?!\.)(\D)/g, '');

  return parseFloat(currency);
};

export default getNumbers;
