import _ from 'lodash';
import './style.css';

import { getData, sendData } from './function';

const refreshBtn = document.querySelector('#refreshBtn');
const form = document.querySelector('#form');
const user = document.querySelector('#user');
const score = document.querySelector('.score');

refreshBtn.addEventListener('click', () => {
  window.location.reload();
  getData();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  sendData(user.value, score.value);
});

getData();
