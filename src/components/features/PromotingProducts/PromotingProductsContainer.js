import { connect } from 'react-redux';
import { getAllPromotingProducts } from '../../../redux/promotingProductsRedux';
import PromotingProducts from './PromotingProducts';

const mapStateToProps = state => ({
  promotingProducts: getAllPromotingProducts(state),
});

export default connect(mapStateToProps)(PromotingProducts);
