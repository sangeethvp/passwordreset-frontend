import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import ForgetPassword from './components/forgetPassword';
import HomePage from './components/homePage';
import ResetPassword from './components/passwordReset';

function App() {
  return (
    <div className="App">
      <Router>
     
        <Routes>
         <Route path='/register' element={<Register/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/passwordreset' element={<ForgetPassword/>}/>
         <Route path='/resetpassword/:Token' element={<ResetPassword/>}/>
         <Route path='/' element={<HomePage/>}/>
         
        </Routes>

      </Router>
     
    </div>
  );
}

export default App;
