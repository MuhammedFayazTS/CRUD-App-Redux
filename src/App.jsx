import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App h-screen ">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addUser' element={<AddUser />} />
        <Route path='/editUser/:id' element={<EditUser/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
