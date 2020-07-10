import { connect } from 'react-redux';

import Ratings from './Ratings';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { rateProduct } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
});

const mapDispatchToProps = dispatch => ({
  rateProduct: (stars, id) =>
    dispatch(
      rateProduct({
        userStars: stars,
        id: id,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ratings);
