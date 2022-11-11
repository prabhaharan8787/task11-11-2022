import logo from './logo.svg';
import './App.css';

import {Signup} from './compount/signup'

import { Signin } from './compount/signin';

import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
  <div>
    
    <BrowserRouter>

      <Routes>
       
        <Route path='/' element={<Signup/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        
      </Routes>
    
    </BrowserRouter>
    
    </div>
  );
}

export default App;
