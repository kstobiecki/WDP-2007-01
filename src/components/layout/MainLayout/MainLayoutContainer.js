import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { getViewPort, changeViewPort } from '../../../redux/viewPortRedux';

const mapStateToProps = state => ({
  viewport: getViewPort(state),
});

const mapDispatchToProps = dispatch => ({
  changeViewPort: viewPort => dispatch(changeViewPort(viewPort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
