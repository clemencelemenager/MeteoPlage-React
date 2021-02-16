/** Import dependancies */
import { connect } from 'react-redux';

/** Import components */
import NavBar from 'src/components/NavBar/index';

/** Import actions */
import { toggleMenu, updateWindowWidth } from 'src/actions/settings';

const mapStateToProps = (state) => ({
  responsiveMenu: state.settings.responsiveMenu,
  windowWidth: state.settings.windowWidth,
});

const mapDispatchToProps = (dispatch) => ({
  handleToggleMenu: () => {
    dispatch(toggleMenu());
  },
  handleWindowWidth: (newValue) => {
    dispatch(updateWindowWidth(newValue));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
