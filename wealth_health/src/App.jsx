import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/mainLayout';
import AddEmployee from './pages/AddEmployee';
import EmployeListPage from './pages/EmployeListPage';

import store from './redux/store';
import { Provider } from 'react-redux';

import './sass/main.scss';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<AddEmployee />} />
            <Route path="/employee-list" element={<EmployeListPage />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
