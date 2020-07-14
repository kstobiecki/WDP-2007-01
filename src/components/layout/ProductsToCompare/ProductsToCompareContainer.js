import { connect } from 'react-redux';
import { toggleCompare } from '../../../redux/productsRedux';
import { comparableProduct } from '../../../redux/productsRedux.js';
import ProductsToCompare from './ProductsToCompare';

const mapStateToProps = state => ({
  products: comparableProduct(state),
});

const mapDispatchToProps = dispatch => ({
  toggleCompare: productId => dispatch(toggleCompare(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsToCompare);
