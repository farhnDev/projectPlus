import DataSource from '../../data/datasource';
import { createRestItemTemplate } from '../templates/template-creator';

const ListWarteg = {
  render() {
    return `
      <div class="content">
        <div class="headline_content">
          <h1>List Warteg</h1>
          <p>Warteg Selo</p>
        </div>
        <div id="wartegList"></div>
      </div>
    `;
  },
  async afterRender() {
    const warteg = await DataSource.getAllWartegs();
    const wartegContainer = document.querySelector('#wartegList');
    warteg.forEach((wartegs) => {
      wartegContainer.innerHTML += createRestItemTemplate(wartegs);
    });
  },
};

export default ListWarteg;
