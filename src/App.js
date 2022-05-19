import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Course from './Component/Course';
import Courseview from './Component/Courseview';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <div>
   <BrowserRouter>
   <Routes>
     <Route path="/"exact element={<Course/>}/>
     <Route path="/view"exact element={<Courseview/>}/>

   </Routes>
   
   </BrowserRouter>
     
   </div>
  );
}

export default App;
