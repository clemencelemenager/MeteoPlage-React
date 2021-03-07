/** Import dependancies */
import { connect } from 'react-redux';

/** Import component */
import Location from 'src/components/Location/index';

/** Import utils */
import { capitalizeFirstLetter } from 'src/utils/weather';

/** Import actions */
import {
  updateCity,
  toggleEditCity,
  saveCity,
  fetchCoordinates,
} from 'src/actions/settings';

const mapStateToProps = (state) => ({
  // state from settings reducer
  displaySampleData: state.settings.displaySampleData,
  city: capitalizeFirstLetter(state.settings.city),
  inputCity: state.settings.inputCity,
  latitude: state.settings.latitude,
  longitude: state.settings.longitude,
  editCity: state.settings.editCity,
  region: state.settings.region,
});

const mapDispatchToProps = (dispatch) => ({
  updateCity: (newValue) => {
    dispatch(updateCity(newValue));
  },
  toggleEditCity: () => {
    dispatch(toggleEditCity());
  },
  saveCity: () => {
    dispatch(saveCity());
  },
  fetchCoordinates: () => {
    dispatch(fetchCoordinates());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Location);
