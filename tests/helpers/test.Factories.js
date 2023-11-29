// import LikeButtonPresenter from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestIdb from '../../src/scripts/DataSource/favorite-rest-idb';
import LikeButtonInitiator from '../../src/scripts/utils/likeButtonInitiator';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestIdb,
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };
