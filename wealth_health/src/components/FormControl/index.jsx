import './FormControl.scss';
import PropTypes from 'prop-types';

/**
 * create form controls
 */

const FormControl = ({
  label,
  name,
  inputType,
  inputStyle,
  placeholder,
  aria,
  register,
  options,
  formState,
  style,
}) => {
  let formInput;

  const error = formState?.errors?.[name];

  switch (inputType) {
    //firstname, lastname, street, city
    case 'input':
      formInput = (
        <input
          style={inputStyle}
          placeholder={placeholder}
          className={!!error ? 'invalid' : ''}
          type="text"
          aria-labelledby={aria}
          {...register}
        />
      );
      break;

    //department, state
    case 'select':
      formInput = (
        <select
          style={inputStyle}
          placeholder={placeholder}
          className={!!error ? 'invalid' : ''}
          aria-labelledby={aria}
          {...register}
        >
          
            {options.map((option, i) => (
              <option value={option.value} key={i}>
                {option.label}
              </option>
            ))}
        
        </select>
      );
      break;

    //birthday,
    case 'date-picker':
      formInput = (
        <>
          <input
            style={inputStyle}
            placeholder={placeholder}
            className={!!error ? 'invalid' : ''}
            type="date"
            aria-labelledby={aria}
            {...register}
          />
          {error?.message && (
            <span style={{ color: 'red' }}>{error.message}</span>
          )}
        </>
      );
      break;

    //zip code, start date
    case 'number-input':
      formInput = (
        <input
          style={inputStyle}
          placeholder={placeholder}
          className={!!error ? 'invalid' : ''}
          type="number"
          aria-labelledby={aria}
          {...register}
        />
      );
      break;
    default:
      break;
  }

  return (
    <div className="form-control" style={{ ...style }}>
      <span className="label">{label || name}</span> {formInput}
    </div>
  );
};

FormControl.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  inputType: PropTypes.string,
  inputStyle: PropTypes.string,
  placeholder: PropTypes.string,
  aria: PropTypes.string,
  register: PropTypes.any,
  options: PropTypes.array,
  formState: PropTypes.any,
  style: PropTypes.any,
};

export default FormControl;
