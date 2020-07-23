import { connect } from 'react-redux';

import FurnitureGallery from './FurnitureGallery';

import { getAll } from '../../../redux/furnitureGalleryRedux';
import { getViewPort } from '../../../redux/viewPortRedux.js';

const mapStateToProps = state => ({
  galleryPics: getAll(state),
  viewPort: getViewPort(state),
});

export default connect(mapStateToProps)(FurnitureGallery);
