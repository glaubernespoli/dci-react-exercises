import './Input.css';
import PropTypes from "prop-types";

const Input = ({ id, label, placeholder, value, valueHandler }) => {
  return (
    <div className="col-auto my-1">
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        id={id}
        placeholder={placeholder}
        onChange={valueHandler}
        value={value}
      />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  valueHandler: PropTypes.func.isRequired
};
export default Input;