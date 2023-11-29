import { createMovieItemTemplate } from '../../template/template-creator';

class FavoriteRestaurantView {
  // eslint-disable-next-line class-methods-use-this
  getTemplate() {
    return `
      <div class="content">
          <div class="headline_content">
            <h1 class="headline_title">Explore Restaurant</h1>
            <p class="headline_sub">Restaurant Favorite</p>
          </div>
        <div id="restaurants" class="restaurants">
        </div>
     </div>
    `;
  }

  showFavoriteRestaurants(restaurants) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createMovieItemTemplate(restaurant)), '');
    } else {
      // eslint-disable-next-line no-underscore-dangle
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  // eslint-disable-next-line class-methods-use-this,no-underscore-dangle
  _getEmptyRestaurantTemplate() {
    return `
      <div class="restaurant-item__not__found">
        Restaurant disukai belum ada
      </div>
    `;
  }
}

export default FavoriteRestaurantView;
