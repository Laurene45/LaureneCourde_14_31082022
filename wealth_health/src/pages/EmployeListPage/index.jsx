import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { employeeActions } from '../../redux/employeeSlice';

import  SearchInput  from '../../components/Search/index';
import  TableEmployee  from '../../components/Table/index';

import { mockData } from '../../datas/mockDataEmployees';

import './EmployeListPage.scss';

/**
 * @description render page
 * @component
 *
 * @returns
 */

 const EmployeListPage = () => {
  const employeState = useSelector(state => state.employees);
  console.log(employeState);

  const [filteredList, setFilteredList] = useState(mockData);
  const [searchText, setSearchText] = useState('');
  

  useEffect(() => {
    console.log(searchText);
    if (!searchText||searchText?.trim() === '') {
      setFilteredList(mockData);
    } else {
      const list = 
        mockData.filter(employe =>
            Object.values(employe)
              .join(' ')
              .toLowerCase()
              .includes(searchText.toLowerCase()),
          );
      setFilteredList(list);
    }
  }, [searchText]);


  
  return (
    <main className="employee-list" aria-label="employee list page">
      <h1>Employee List</h1>
      <section>
        <SearchInput  onSearch={setSearchText} />
      </section>
     
        <TableEmployee  data={filteredList} />
     
    </main>
  );
};

export default EmployeListPage;


/*
return (
    <main className="employe-list" aria-label="employee list page">
      <h1>Employee List</h1>
      <section>
        <SearchInput onSearch={setSearchText} />
      </section>
      <TableEmployee tableData={filteredList} />
    </main>


    const dispatch = useDispatch();

    dispatch(userActions.setUserInfos(response.body));
  );*/