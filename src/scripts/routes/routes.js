/* eslint-disable import/extensions */
import NowPlaying from '../view/pages/now-playing.js';
import Upcoming from '../view/pages/upcoming.js';
import Detail from '../view/pages/detail.js';

const routes = {
  '/': NowPlaying, // default page
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
};

export default routes;
