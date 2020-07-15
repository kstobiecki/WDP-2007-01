import { connect } from 'react-redux';

import ProductBox from './ProductBox';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { updateFavoriteStatus } from '../../../redux/productsRedux.js';
import { toggleCompare } from '../../../redux/productsRedux';

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

  toggleCompare: productId => dispatch(toggleCompare(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
