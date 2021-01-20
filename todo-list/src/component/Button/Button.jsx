import './Button.css'

import PropTypes from 'prop-types'

import { ButtonClass } from '../../utils/ButtonUtils'

const Button = ({ buttonText, btnClass, clickHandler }) => {
  btnClass = btnClass ? btnClass : ButtonClass.PRIMARY;
    return (
      <div className="col-auto my-1">
        <button type="button" className={`btn btn-sm btn-${btnClass}`} onClick={clickHandler}>
          {buttonText}
        </button>
      </div>
    );
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  btnClass: PropTypes.string,
  clickHandler: PropTypes.func.isRequired
};

export default Button;