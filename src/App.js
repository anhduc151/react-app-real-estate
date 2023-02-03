import { Routes, Route } from 'react-router-dom';

import '././firebase/connect.js';
import './assets/style/App.css';
import Home from './pages/Home';

import NorthProduct from './pages/Products/NorthProduct';
import SouthProduct from './pages/Products/SouthProduct';
import ProductManager from './pages/Products/ProductManager';
import Advise from './pages/Advise';
import Research from './pages/About/Research';
import Advice from './pages/About/Advice';
import RequestValue from './pages/Contacts/RequestValue';
import Contact from './pages/Contacts/Contact';
import AddUser from './AdminScreen/Menu/User/AddUser';
import AdminManager from './AdminScreen/AdminManager';
import RemoveUser from './AdminScreen/Menu/User/RemoveUser';
import AddShipment from './AdminScreen/Menu/Shipment/AddShipment';
import Query from './AdminScreen/Menu/Shipment/Query';
import Add from './AdminScreen/Menu/Product/Add';
import Edit from './AdminScreen/Menu/Product/Edit';
import Help from './AdminScreen/Menu/Help';
import ProductsList from './AdminScreen/Menu/Product/ProductsList/index.js';
import Login from './pages/register/Login/Login.js';
import Register from './pages/register/Signup/Register.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/northProduct' element={<NorthProduct />} />
        <Route path='/southProduct' element={<SouthProduct />} />
        <Route path='/productManager' element={<ProductManager />} />
        <Route path='/advise' element={<Advise />} />
        <Route path='/research' element={<Research />} />
        <Route path='/advice' element={<Advice />} />
        <Route path='/request-valuetion' element={<RequestValue />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Register/>}/>
       

        <Route path='/admin' element={<AdminManager />} />
        <Route path='/admin/adduser' element={<AddUser />} />
        <Route path='/admin/removeuser' element={<RemoveUser />} />
        <Route path='/admin/addshipment' element={<AddShipment />} />
        <Route path='/admin/query' element={<Query />} />
        <Route path='/admin/products' element={<ProductsList />} />
        <Route path='/admin/addproduct' element={<Add />} />
        <Route path='/admin/editproduct/:productId' element={<Edit />} />
        <Route path='/admin/help' element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
