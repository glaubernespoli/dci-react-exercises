import './Button.css';

const Button = ({value, onClick}) => {
    return (
      <div>
        <button type="button" onClick={onClick}>
          {value}
        </button>
      </div>
    );
}

export default Button
