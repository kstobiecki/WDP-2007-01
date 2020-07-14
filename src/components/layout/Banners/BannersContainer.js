import { connect } from 'react-redux';

import Banners from './Banners';

import { getAll } from '../../../redux/bannersRedux';

const mapStateToProps = state => ({
  banners: getAll(state),
});

export default connect(mapStateToProps)(Banners);
