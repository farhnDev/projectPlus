/* eslint-disable import/extensions */
/* eslint-disable eol-last */
import CONFIG from './config.js';

const API_ENDPOINT = {
  NOW_PLAYING: `${CONFIG.BASE_URL}list`,
  // UPCOMING: `${CONFIG.BASE_URL}review`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;