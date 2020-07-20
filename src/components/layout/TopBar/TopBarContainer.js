import { connect } from 'react-redux';
import TopBar from './TopBar';
import { getAll, changeSiteOption } from '../../../redux/siteOptionsRedux';

const mapStateToProps = state => ({
  options: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  changeSiteOption: (newActive, currentlyActive) =>
    dispatch(
      changeSiteOption({
        newActive: newActive,
        currentlyActive: currentlyActive,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
