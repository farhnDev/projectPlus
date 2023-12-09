import CONFIG from '../../globals/config';

const createRestDetailTemplate = (warteg) => `
  <div class="warteg">
  <div class="warteg__image">
    <h2 class="warteg__title">${warteg.restaurant.name}</h2>
    <img class="warteg__poster" src="${CONFIG.BASE_IMAGE_URL + warteg.restaurant.pictureId}" alt="${warteg.restaurant.name}" />
  </div>
  <div class="warteg__description">
    <div class="warteg__info" aria-label="information warteg">
      <h2 aria-label="information">Information</h2>
      <h4 aria-label="Address">Address</h4>
      <p aria-label="${warteg.restaurant.address},kota ${warteg.restaurant.city}">${warteg.restaurant.address}, ${warteg.restaurant.city}</p>
      <h4 aria-label="menu kita">Menu</h4>
      <div class="menu-categories">
        <div class="food-categories">
          <p>Food Categories:</p>
          <ul>
            ${warteg.restaurant.menus.foods.map((food) => `<li aria-label="${food.name}">${food.name}</li>`).join('')}
          </ul>
        </div>
        <div class="drink-categories">
          <p>Drink Categories:</p>
          <ul>
            ${warteg.restaurant.menus.drinks.map((drink) => `<li aria-label="${drink.name}">${drink.name}</li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="warteg__overview">
        <h3>Description</h3>
        <p aria-label="${warteg.restaurant.description}">${warteg.restaurant.description}</p>
      </div>
    </div>
  </div>
  <div class="customer__riview">
    <h3 aria-label="riview customer,">Customer Reviews</h3>
    ${warteg.restaurant.customerReviews.map((review) => `
    <p aria-label="${review.name}">${review.name}</p>
    <p class="date__review" aria-label="${review.date}">${review.date}</p>
    <p class="review__value" aria-label="${review.review}">Riview: ${review.review}</p>
    `).join('')}
  </div>
</div>
`;
const createRestItemTemplate = (warteg) => `
      <article class="card" tabindex="0">
        <p class="kota" aria-label="Kota ${warteg.city},">${warteg.city}</p>
        <img src="${CONFIG.BASE_IMAGE_URL + warteg.pictureId}" alt="${warteg.name}">
        <div class="card-content">
            <h3 class="name_warteg" aria-label="Nama warteg ${warteg.name},">${warteg.name}</h3>
            <div class="rating" >
            <p aria-label="rating ${warteg.rating},"> Rating: ${warteg.rating}</p>
            <p><a href="/#/detail/${warteg.id}" aria-label="detail restaurant ${warteg.name}," class="detail">Detail</a></p>
            </div>
            <p class="description" aria-label="Description restaurant ${warteg.description},">${warteg.description}</p>
        </div>
    </article>
`;

const createLikeButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" 
class="like">
<i class="fa fa-heart-o" aria-hidden="true"></i>
</button>`;

const createLikedButtonTemplate = () => `
<button aria-label="unlike this restaurant"
id="likeButton" class="like">
<i class="fa fa-heart" aria-hidden="true"></i>
</button>`;
export {
  createRestDetailTemplate,
  createRestItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
