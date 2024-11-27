import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Header from './template/Header';
import AddProduct from './products/AddProduct';
import ViewProduct from './products/ViewProduct';

function App() {
  return (
    <div className="App">
       <h1>Store management</h1>
       <BrowserRouter>
       <Header/>
       <div className='background'>
          <Routes>
            <Route path='/' element={<ViewProduct/>}>ViewProduct</Route>
            <Route path='add' element={<AddProduct/>}>AddProduct</Route>
            <Route path='view' element={<ViewProduct/>}>ViewProduct</Route>
            <Route path='edit/:id' element={<AddProduct/>}></Route>
          </Routes>
          </div>
       
      
       </BrowserRouter>
    </div>
  );
}

export default App;
