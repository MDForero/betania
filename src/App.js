import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './Components/Layout';
import Inicio from './page/Inicio';
import Contacto from './page/Contacto';

const  App = () => {
  return (
    <div> 
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Inicio/>}/>
          <Route path="contacto" element={<Contacto/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
