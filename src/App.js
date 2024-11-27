import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Chatpage from './Pages/ChatPages';
import Login  from './components/authentication/login';
import Signup  from './components/authentication/Signup';
function App() {
  return (
    <div className="App">
     <Route path='/' component={Homepage} exact />
     <Route path='/chat' component={Homepage}/>
     <Route path='/login' component={Login}/>
     <Route path='/signup' component={Signup}/>
    </div>
  );
}

export default App;
