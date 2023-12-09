import FavoriteRestaurantIdb from '../../data/favorite-warteg-fav';
import { createRestItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
<div class="content">
        <div class="headline_content">
          <h1>List Warteg Favorite</h1>
          <p>Warteg Selo</p>
        </div>
    <div id="wartegs">
    </div>
</div>
      `;
  },
  async afterRender() {
    const warteg = await FavoriteRestaurantIdb.getAllWartegs();
    const wartegContainer = document.querySelector('#wartegs');

    warteg.forEach((wartegs) => {
      wartegContainer.innerHTML += createRestItemTemplate(wartegs);
    });
  },
};

export default Like;
