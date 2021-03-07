/** Import dependancies */
import React from 'react';
import PropTypes from 'prop-types';

/** Import assets */
import './card.scss';
/** Import utils */
import { getTideStatus } from 'src/utils/tides';

const Card = ({
  content,
  icon,
  text,
  additionalText,
}) => (
  <div className={`card ${content}`}>
    {
      /** if weather content, display icon */
      (content === 'weather') && (
        <div className="card-weatherIcon">
          <img src={icon} alt={icon} />
        </div>
      )
    }
    <div className="card-text">
      {
        /** default display */
        (content !== 'wind' && content !== 'tides') && (
          <p>{text}</p>
        )
      }
      {
        /** if wind content, display 2 datas */
        (content === 'wind') && (
          <>
            <p className="card-text-1">{text[0]}</p>
            <p className="card-text-2">{text[1]}</p>
          </>
        )
      }
      {
        /** if tides content, display custom text */
        (content === 'tides') && (
          <>
            <p className="card-text-1">
              {getTideStatus(text[0])}, marée {text[0]} à {text[1]}
            </p>
            <p className="card-text-2">Prochaine marée {text[2]} à {text[3]}</p>
            <p className="card-text-legend">Info marée à {text[4]}km, NE PAS UTILISER POUR LA NAVIGATION</p>
          </>
        )
      }
    </div>
    {
      /** if additional text is transmitted, display it */
      additionalText && (
        <div className="card-additionalText">
          <p>{additionalText}</p>
        </div>
      )
    }
  </div>
);

Card.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  additionalText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
};

Card.defaultProps = {
  icon: '',
  text: '',
  additionalText: '',
};

export default Card;
