import CONFIG from '../../globals/config';

const createMovieDetailTemplate = (movie) => `
<div class="restaurant-detail">
<div class="restaurant-header">
  <h2 class="restaurant__title">${movie.restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + movie.restaurant.pictureId}" alt="${movie.restaurant.name}" />
</div>

<div class="restaurant__info">
  <h2>Detail Restoran</h2>
  <div class="info-item">
    <h4>Nama</h4>
    <p>${movie.restaurant.name}</p>
  </div>
  <div class="info-item">
    <h4>Rating</h4>
    <p>${movie.restaurant.rating}</p>
  </div>
  <div class="info-item">
    <h4>Alamat</h4>
    <p>${movie.restaurant.address}</p>
  </div>
  <div class="info-item">
    <h4>Kota</h4>
    <p>${movie.restaurant.city}</p>
  </div>
  <div class="info-item">
    <h4>Deskripsi</h4>
    <p>${movie.restaurant.description}</p>
  </div>
</div>

<div class="restaurant__menu">
  <h3>Menu Makanan</h3>
  <ul>
    ${movie.restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
  </ul>
  
  <h3>Menu Minuman</h3>
  <ul>
    ${movie.restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
  </ul>
</div>

<div class="customer-reviews">
  <h3>Customer Reviews</h3>
  <ul>
    ${movie.restaurant.customerReviews.map((review) => `
      <li class="review-item">
        <p class="reviewer-name"><strong>${review.name}</strong></p>
        <p class="review-content">${review.review}</p>
        <p class="review-date">${review.date}</p>
      </li>
    `).join('')}
  </ul>
</div>
</div>
`;

const createMovieItemTemplate = (rest) => `
  <div class="movie-item">
    <div class="movie-item__header">
    <p>${rest.city}</p>
        <img id="movie-item__header__poster" data-src="${CONFIG.BASE_IMAGE_URL + rest.pictureId}" alt="${rest.name}" class="lazyload">
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${rest.rating}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3 class="movie__title"><a href="/#/detail/${rest.id}">${rest.name}</a></h3>
      <p>${rest.description}</p>
    </div>
  </div>
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
  createMovieItemTemplate,
  createMovieDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
