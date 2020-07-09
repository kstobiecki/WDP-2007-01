import { connect } from 'react-redux';

import ProductBox from './ProductBox';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { updateFavoriteStatus } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
});

const mapDispatchToProps = dispatch => ({
  updateFavoriteStatus: (favorite, id) =>
    dispatch(
      updateFavoriteStatus({
        favorite: favorite,
        id: id,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
