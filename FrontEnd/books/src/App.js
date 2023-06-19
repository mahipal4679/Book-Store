import './App.css';
import Nav from './components/Nav';
import { Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateComponent';

function App() {
  return (
    <div className="App">
      
        <Nav />
        <Routes>
          <Route path="/" element={<PrivateComponent />}>
            <Route index element={<ProductList />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="update/:id" element={<UpdateProduct />} />
            <Route path="logout" element={<h1>Logout Component</h1>} />
            <Route path="profile" element={<h1>Profile Component</h1>} />
          </Route>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
