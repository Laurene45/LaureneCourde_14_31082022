import defaultEmployeeList from '../datas/dataEmployee';

const getEmployeeList = () => {
  const data = localStorage.getItem('employee');
  console.log({ data });
  const list = data === null ? defaultEmployeeList : JSON.parse(data);
  return list;
};
const setEmployeeList = employee => {
  localStorage.setItem('employee', JSON.stringify(employee));
};

const StorageHelper = { getEmployeeList, setEmployeeList };
export default StorageHelper;
