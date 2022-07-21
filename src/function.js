const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameId = 'prsipkJK7w2uUs0k7Q2H';

const newUrl = `${baseUrl}${gameId}/scores/`;

const dataTable = document.querySelector('.list');

const showData = (results) => {
  results.forEach((element) => {
    dataTable.innerHTML += `<tr><td>${element.user}</td><td>${element.score}</td></tr>`;
  });
};

const getData = async () => {
  await fetch(newUrl)
    .then((response) => response.json())
    .then((json) => showData(json.result));
};

const sendData = async (userName, score) => {
  await fetch(newUrl, {
    method: 'POST',
    body: JSON.stringify({
      user: userName,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

export { getData, sendData };
