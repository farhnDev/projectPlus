import 'regenerator-runtime';
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/no-unresolved
import '../styles/main.css';
import swRegister from './utils/sw-register';
import App from './view/main';

// document.addEventListener('DOMContentLoaded', App);
const app = new App({
  burger: document.querySelector('#menu-tombol'),
  navbar: document.querySelector('#nav-list'),
  content: document.querySelector('#post'),
});
window.addEventListener('hashchange', () => {
  app.renderPage().then((r) => r);
});

window.addEventListener('load', async () => {
  app.renderPage().then((r) => r);
  await swRegister();
});
