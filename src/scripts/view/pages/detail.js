import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/datasource';
import { createRestDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div id="warteg" class="restaurant" tabindex="0"></div>
        <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const warteg = await DataSource.detailWarteg(url.id);
    const initiatorBtn = warteg.restaurant;
    const wartegContainer = document.querySelector('#warteg');

    wartegContainer.innerHTML = createRestDetailTemplate(warteg);

    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: initiatorBtn.id,
        name: initiatorBtn.name,
        description: initiatorBtn.description,
        pictureId: initiatorBtn.pictureId,
        city: initiatorBtn.city,
        rating: initiatorBtn.rating,
      },
    });
  },
};

export default Detail;
