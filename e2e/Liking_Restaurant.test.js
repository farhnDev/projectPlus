const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Liking Restaurant');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/upcoming');
});

// eslint-disable-next-line no-undef
Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('.restaurants');
  I.dontSee('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

// eslint-disable-next-line no-undef
Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.movie__title a');

  const firstRestaurantName = await I.grabTextFrom('.movie__title');
  I.click('.movie__title a');
  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/upcoming');
  I.seeElement('.movie-item');

  const likedRestaurantName = await I.grabTextFrom('.movie__title');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.movie__title a');
  I.click('.movie__title a');
  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/upcoming');
  I.seeElement('.movie__title a');
  const firstLikedRestaurant = locate('.movie__title a').first();
  I.click(firstLikedRestaurant);
  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/upcoming');
  I.dontSeeElement('.movie__title a');
});
