import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/mainLayout';
import AddEmployee from './pages/AddEmployee';
import EmployeListPage from './pages/EmployeListPage';

import { store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';
import './sass/main.scss';

function App() {
  let persistor = persistStore(store);

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<AddEmployee />} />
              <Route path="/employee-list" element={<EmployeListPage />} />
            </Route>
          </Routes>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;