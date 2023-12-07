import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Users from './Routes/Users';
import Teams from './Routes/Teams';
import { AddUser } from './Routes/AddUser';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/users' element={<Users />} />
      <Route path='/teams' element={<Teams />} />
      <Route path='/users/create' element={<AddUser />} />
    </Routes>
  );
}

export default App;
