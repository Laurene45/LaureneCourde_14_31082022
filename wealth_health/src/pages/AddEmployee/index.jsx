import React from 'react';
import CreateForm  from '../../components/CreateForm/index';
import './AddEmployee.scss';

/**
 * @description render page
 * @component
 *
 * @returns
 */


const AddEmployee = () => {
  return (
    <main className="home-page" aria-label="home page">
      <CreateForm />
    </main>
  );
};

export default AddEmployee;
