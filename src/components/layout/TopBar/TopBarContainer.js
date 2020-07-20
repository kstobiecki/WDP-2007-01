import { connect } from 'react-redux';
import TopBar from './TopBar';
import {
  getAllCurrencies,
  getAllLanguages,
  getAllClientService,
  changeSiteOption,
} from '../../../redux/siteOptionsRedux';

const mapStateToProps = state => ({
  currencies: getAllCurrencies(state),
  language: getAllLanguages(state),
  clientService: getAllClientService(state),
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
