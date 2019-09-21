const apiKey = 'c6a35b7dccee4ff5934ecdd0c4d4fa1e';

const getHeadlines = () => {
  return fetch(
    `https://newsapi.org/v2/top-headlines?country=pt&apiKey=${apiKey}`
  )
    .then(resp => resp.json())
    .then(resp => resp);
};

export default getHeadlines;
