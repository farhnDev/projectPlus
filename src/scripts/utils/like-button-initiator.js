/* eslint-disable */
import WartegFavoriteIdb from '../data/favorite-warteg-fav';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../view/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._wartegs = restaurant;

    await this._renderButton();
  },

  // eslint-disable-next-line no-underscore-dangle
  async _renderButton() {
    const { id } = this._wartegs;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  // eslint-disable-next-line no-underscore-dangle
  async _isRestaurantExist(id) {
    const warteg = await WartegFavoriteIdb.getWarteg(id);
    return !!warteg;
  },
  // eslint-disable-next-line no-underscore-dangle
  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await WartegFavoriteIdb.putWarteg(this._wartegs);
      this._renderButton();
    });
  },

  // eslint-disable-next-line no-underscore-dangle
  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await WartegFavoriteIdb.deleteWarteg(this._wartegs.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
