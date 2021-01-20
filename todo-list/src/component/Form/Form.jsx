import './Form.css'

import PropTypes from 'prop-types'
import Input from './Input/Input'
import Button from '../Button/Button'

const Form = ({ entity, updateInputHandler, submitForm }) => {
  return (
    <div className="container">
      <form>
        <div className="form-row align-items-center">
          <Input
            id="new-todo-inpt"
            label="Add a new to-do"
            placeholder="Add to-do"
            value={entity.value}
            valueHandler={updateInputHandler}
          />

          <Button buttonText="Add" clickHandler={submitForm} />
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
    entity: PropTypes.object.isRequired,
    updateInputHandler: PropTypes.func.isRequired,
    submitForm: PropTypes.func.isRequired
};

export default Form;