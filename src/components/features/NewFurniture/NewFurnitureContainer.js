import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getViewPort } from '../../../redux/viewPortRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  viewPort: getViewPort(state),
});

export default connect(mapStateToProps)(NewFurniture);
