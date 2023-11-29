import TheMovieDbSource from '../../DataSource/dataSource';
import { createMovieItemTemplate } from '../template/template-creator';

const NowPlaying = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Now Playing in Cinema</h2>
        <div id="restaurantList" class="movies">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.getAllRestaurants();
    const moviesContainer = document.querySelector('#restaurantList');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default NowPlaying;
