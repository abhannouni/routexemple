import './App.css';
import { Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import { Order } from './components/Order';
import { Notfound } from './components/Notfound';
import { Products } from './components/Products';
import { FeaturedProducts } from './components/utils/FeaturedProducts';
import { NewProducts } from './components/utils/NewProducts';
import { Users } from './components/Users';
import { UserDetails } from './components/utils/UserDetails';
import { Categories } from './pages/Categories';
import { Register } from './pages/Register';
import { Confirmation } from './pages/Confirmation';
import Footer from './components/Footer';
import { UseRef } from './pages/UseRef';
import { CategoriesSession } from './components/CategoriesSession';
import { CategoriesSubSession } from './components/CategoriesSubSession';

function App() {
  return (
    <>
      <div className='App'>  
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/order' element={<Order/>} />
          <Route path='/products' element={<Products/>}>
            <Route index element={<FeaturedProducts/>} />
            <Route path='featured' element={<FeaturedProducts/>} />
            <Route path='new' element={<NewProducts/>} />
          </Route>
          <Route path="users" element={<Users/>} >
            <Route path=":userId" element={<UserDetails/>} />
          </Route>
          <Route path='/categories' element={<Categories/>}>
            <Route path=':title' element={<CategoriesSession/>}>
              <Route path=':title' element={<CategoriesSubSession/>} />
            </Route>
          </Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/confirmation' element={<Confirmation/>}></Route>
          <Route path='/userRef' element={<UseRef/>}></Route>
          <Route path='*' element={<Notfound/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
