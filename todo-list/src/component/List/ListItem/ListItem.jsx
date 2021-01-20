import './ListItem.css';

import PropTypes from 'prop-types'

import Button from '../../Button/Button'
import { ButtonClass } from "../../../utils/ButtonUtils";

const ListItem = ({id, content}) => {
    return (
      <li className="list-group-item">
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id={id} value="" ch />
          <label className="form-check-label" htmlFor={id}>
            {content}
          </label>
          <Button buttonText="Delete" btnClass={ButtonClass.OUTLINE_DELETE} />
        </div>
      </li>
    );
}

ListItem.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default ListItem;