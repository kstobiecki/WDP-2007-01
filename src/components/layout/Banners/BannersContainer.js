import { connect } from 'react-redux';

import Banners from './Banners';

import { getAll } from '../../../redux/bannersRedux';
import { getViewPort } from '../../../redux/viewPortRedux.js';

const mapStateToProps = state => ({
  banners: getAll(state),
  viewPort: getViewPort(state),
});

export default connect(mapStateToProps)(Banners);
