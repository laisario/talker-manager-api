const filterSearch = (talkers, q, rate) => {
  let filters;
  const searchRate = talkers.filter(({ talk }) => talk.rate === Number(rate));
  const searchQ = talkers.filter(({ name }) => name.includes(q));
  const searchAll = searchRate.searchQ;
  console.log(searchAll);
  if (q && searchRate) {
    filters = searchAll;
  }
  if (searchRate) {
    filters = searchRate;
  }
  if (q) {
    filters = searchQ;
  }
  return filters;  
};

module.exports = filterSearch;