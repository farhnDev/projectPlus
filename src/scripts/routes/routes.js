import ListWarteg from '../view/pages/list-warteg';
import Detail from '../view/pages/detail';
import Like from '../view/pages/like';

const routes = {
  '/': ListWarteg,
  '/list-warteg': ListWarteg,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
