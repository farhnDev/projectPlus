import FavoriteRestaurantIdb from '../../DataSource/favorite-rest-idb';
import FavoriteRestaurantView from './favoriteLike/favoriteRestaurant-view';
import FavoriteRestaurantShowPresenter from './favoriteLike/favoriteRestaurantShow-presenter';

const view = new FavoriteRestaurantView();
const Upcoming = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    // eslint-disable-next-line no-new
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Upcoming;
