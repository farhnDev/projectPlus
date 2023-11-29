/* eslint-disable no-multi-spaces */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import filterContacts from 'lodash.filter';
import css from  '../styles/style.scss';
import swRegister from './utils/sw-register.js';
import App from './view/app.js';

const app = new App({
  burger: document.querySelector('#hamburger'),
  navbar: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
import('lodash.filter')
  .then((module) => module.default)
  .then(filterContacts)
  .catch((error) => alert(error));
window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
