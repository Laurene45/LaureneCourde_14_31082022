import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormControl from '../../components/FormControl/index';
import { addYears } from 'date-fns';

import { states } from '../../datas/states';
import { department } from '../../datas/department';




import './CreateForm.scss';

/**
 * @description création component CreateForm
 * @component
 *
 * @returns {Reactnode}   jsx injected in DOM
 */


const CreateForm = () => {
  
  const { handleSubmit, register, formState } = useForm({
    defaultValues: {
      startDate: null,
      dateOfBirth: null,
    },
  });
  const submitForm = (formValue) => {
    console.log(formValue);
    const selectedState = states.find(
      (state) => state.value === formValue.stateAbbrev
    );

    console.log(selectedState);


    
  };

  return (
    <div className="container-form">
      <form className="create-form" onSubmit={handleSubmit(submitForm)}>
        <div className="form">
          <div className="information">
            <span className="title-form">Informations</span>

            <FormControl
              name="firstName"
              inputType="input"
              label="First name"
              placeholder="first name"
              style={{ width: 200 }}
              aria="fist name"
              formState={formState}
              register={register('firstName', { required: true })}
            />
            <FormControl
              formState={formState}
              name="lastName"
              inputType="input"
              label="Last name"
              placeholder=" last name"
              aria="last name"
              register={register('lastName', { required: true })}
            />

            <FormControl
              formState={formState}
              name="dateOfBirth"
              inputType="date-picker"
              label="Birth date"
              aria="birth date"
              register={register('dateOfBirth', {
                required: true,
                valueAsDate: true,
                max: {
                  value: addYears(new Date(), -18),
                  message: 'you must be older then 18 ',
                },
              })}
            />

            <FormControl
              formState={formState}
              name="startDate"
              inputType="date-picker"
              label="Start date"
              aria="start date"
              register={register('startDate', {
                required: true,
                valueAsDate: true,
              })}
            />

            <div className='styled'>
            <FormControl
              formState={formState}
              name="department"
              inputType="select"
              label="Department"
              placeholder=""
              options={department}
              aria="department"
              register={register('department')}
              />
              </div>


          </div>

          <div className="address">
            <span className="title-form">Address</span>

            <FormControl
              formState={formState}
              name="street" //{["address", "street"]}
              inputType="input"
              label="Street"
              aria="street"
              register={register('street', { required: true })}
            />

            <FormControl
              formState={formState}
              name="city"
              inputType="input"
              label="City"
              aria="city"
              register={register('city', { required: true })}
            />

            <FormControl
              formState={formState}
              name="stateAbbrev"
              inputType="select"
              label="State"
              options={states}
              aria="state"
              register={register('stateAbbrev')}
            />

            <FormControl
              formState={formState}
              name="zipCode"
              inputType="number-input"
              label="Zip Code"
              aria="zipCode"
              register={register('zipCode', { required: true })}
            />

          </div>
        </div>
        <button className="save-button" type="submit" aria-label="save button">
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
