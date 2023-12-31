import API_ENDPOINT from '../globals/api-endpoint';

class TheMovieDbSource {
  static async getAllRestaurants() {
    const response = await fetch(API_ENDPOINT.NOW_PLAYING);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailMovie(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default TheMovieDbSource;
