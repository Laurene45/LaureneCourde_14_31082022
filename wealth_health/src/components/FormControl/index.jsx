import React from 'react';
import PropTypes from 'prop-types';
import './FormControl.scss';

/**
 * @create form controls
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
          id = {name}
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
          id = {name}
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
            id = {name} 
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
          id = {name} 
        />
      );
      break;
    default:
      break;
  }

  return (
    <div className="form-control" style={{ ...style }}>
      <label className="label"  htmlFor= {name}>{label || name}</label> {formInput}
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
  id: PropTypes.string,
};

export default FormControl;
