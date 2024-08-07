import './App.css';
import Dashboard from './modules/dashboard';
import Form from './modules/form';
import { Routes, Route, Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const isLoggedIn = localStorage.getItem('user:token') !== null || true;
  console.log('isLoggedIn :>> ', isLoggedIn);
  
  if(!isLoggedIn) {
    return <Navigate to={'/users/sign_in'}/>
  } else if(isLoggedIn && ['/users/sign_in','/users/sign_up'].includes(window.location.pathname)){
    console.log('object :>> ');
    return  <Navigate to={'/'}/>
  }

  return children
}


function App() {
  return (
    <Routes>
      <Route path ='/' element={
        <ProtectedRoutes>
          <Dashboard/>
        </ProtectedRoutes>
      }/>
      <Route path ='/users/sign_in' element={
        <ProtectedRoutes>
          <Form isSignInPage={true}/>
        </ProtectedRoutes>
        }/>
      <Route path ='/users/sign_up' element={
        <ProtectedRoutes>
         <Form isSignInPage={false}/>
        </ProtectedRoutes>
        }/>
    </Routes>

  );
}

export default App;
