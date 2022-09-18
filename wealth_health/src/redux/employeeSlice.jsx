import { createSlice } from '@reduxjs/toolkit';

export const employeesSlice = createSlice({
  name: 'employeeList',
  initialState: {
    employees: [],
  },

  reducers: {
    addEmployee: (state, action) => {
      console.log(action.payload);
      state.employees.push(action.payload);
    },
  },
});

const employeeActions = employeesSlice.actions;
const employeeReducer = employeesSlice.reducer;

export { employeeActions, employeeReducer };
