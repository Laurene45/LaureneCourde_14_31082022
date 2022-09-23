import { createSlice } from '@reduxjs/toolkit';

export const employeesSlice = createSlice({
  name: 'employeeList',
  initialState: {
    employees: [],
  },

  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
      console.log(state);
    },
  },
});

const employeeActions = employeesSlice.actions;
const employeeReducer = employeesSlice.reducer;

export { employeeActions, employeeReducer };
