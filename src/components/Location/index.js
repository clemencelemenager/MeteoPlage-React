/** Import dependancies */
import React from 'react';
import PropTypes from 'prop-types';

/** Import assets */
import './location.scss';

const Location = ({
  city,
  region,
  inputCity,
  updateCity,
  editCity,
  toggleEditCity,
  saveCity,
  fetchCoordinates,
}) => {
  const handleUpdateCity = (event) => {
    event.preventDefault();
    updateCity(event.target.value);
  };
  const handleEditButton = (event) => {
    event.preventDefault();
    toggleEditCity();
  };
  const handleSubmitCity = (event) => {
    event.preventDefault();
    saveCity();
    fetchCoordinates();
  };

  return (
    <div className="location">
      <div className="city">
        {city}
        {
          /** Display edit button when not editing location */
          !editCity && (
            <i
              className="fas fa-pen edit"
              onClick={handleEditButton}
            />
          )
        }
      </div>
      {
        /** Display region only when not editing location */
        !editCity && (
          <div className="region">
            {region}
          </div>
        )
      }
      {
        /** Display search input when editing the location */
        editCity && (
          <form autoComplete="on" className="location-edit" onSubmit={handleSubmitCity}>
            <input
              type="text"
              value={inputCity}
              onChange={handleUpdateCity}
              placeholder="Nouvelle position"
            />
            <button
              className="buttonReset"
              type="submit"
            >
              <i className="fas fa-check-square confirm" />
            </button>
            <i
              className="far fa-window-close cancel"
              onClick={handleEditButton}
            />
          </form>
        )
      }
    </div>
  );
};

Location.propTypes = {
  city: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  inputCity: PropTypes.string.isRequired,
  updateCity: PropTypes.func.isRequired,
  editCity: PropTypes.bool.isRequired,
  toggleEditCity: PropTypes.func.isRequired,
  saveCity: PropTypes.func.isRequired,
  fetchCoordinates: PropTypes.func.isRequired,
};

export default Location;
