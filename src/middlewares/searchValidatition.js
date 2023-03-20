// let filters;
// if (q && rate) {
//   filters = talkers
//   .filter(({ name }) => name.includes(q)).filter(({ talk }) => talk.rate === Number(rate));
//   return filters;  
// }
// if (q) {
//   filters = talkers.filter(({ name }) => name.includes(q));
//   return filters;  
// }
// if (rate) {
//   filters = talkers.filter(({ talk }) => talk.rate === Number(rate));
//   return filters;  
// }
const filterSearch = (talkers, q, rate) => {
  let filteredTalkers = [...talkers];

    if (q) filteredTalkers = filteredTalkers.filter(({ name }) => name.includes(q));
    if (rate) filteredTalkers = filteredTalkers.filter(({ talk }) => talk.rate === Number(rate));

    return filteredTalkers;
};

module.exports = filterSearch;