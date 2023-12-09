import ENDPOINT from '../globals/endpoint';

class DataSource {
  static async getAllWartegs() {
    const response = await fetch(ENDPOINT.LIST_REST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailWarteg(id) {
    const response = await fetch(ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default DataSource;
