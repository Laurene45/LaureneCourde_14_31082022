import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SearchInput from '../../components/Search/index';
import TableEmployee from '../../components/Table/index';
import './EmployeListPage.scss';

// import { useDispatch } from 'react-redux';
// import { employeeActions } from '../../redux/employeeSlice';
// import { mockData } from '../../datas/mockDataEmployees';

/**
 * @description render page
 * @component
 *
 * @returns
 */

const EmployeListPage = () => {
  const updateEmployees = useSelector((state) => state.employeeList); // create employees array
  const [filteredList, setFilteredList] = useState(updateEmployees.employees);
  const [searchText, setSearchText] = useState('');
  // const dispatch = useDispatch();

  useEffect(() => {
    // recharge mockData array
    // mockData.forEach((d) => {
    //   dispatch(employeeActions.addEmployee(d));
    // });

    if (!searchText || searchText?.trim() === '') {
      setFilteredList(updateEmployees.employees);
    } else {
      const list = updateEmployees.employees.filter((employe) =>
        Object.values(employe)
          .join(' ')
          .toLowerCase()
          .includes(searchText.toLowerCase())
      );
      setFilteredList(list);
    }
  }, [searchText]);

  return (
    <main className="employee-list" aria-label="employee list page">
      <h1>Employee List</h1>
      <section>
        <SearchInput onSearch={setSearchText} />
      </section>
      <TableEmployee data={filteredList} />
    </main>
  );
};

export default EmployeListPage;
