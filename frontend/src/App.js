import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Users from './Routes/Users';
import Teams from './Routes/Teams';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/users' element={<Users />} />
      <Route path='/teams' elsement={<Teams />} />
    </Routes>
  );
}

export default App;
