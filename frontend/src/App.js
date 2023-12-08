import './App.css';
import { Routes, Route } from 'react-router-dom';
import Users from './Routes/Users';
import Teams from './Routes/Teams';
import { AddUser } from './Routes/AddUser';
import { EditUser } from './Routes/EditUser';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Users />} />
      <Route path='/teams' element={<Teams />} />
      <Route path='/users/create' element={<AddUser />} />
      <Route path='/users/edit/:id' element={<EditUser />} />
    </Routes>
  );
}

export default App;
