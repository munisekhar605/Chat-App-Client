import {React,useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Login = () => {

const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const history=useHistory()
const NavigateChat=()=>{
   history.push('/chat')
}

const handleSubmit=(e)=>{
 e.preventDefault();
    const userData = {email, password };
        axios.post('http://localhost:5000/user/login', JSON.stringify(userData), {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            console.log('User registered successfully:', response.data);
            setEmail('')
            setPassword('')
            localStorage.setItem('token',response.data.token)
            NavigateChat()
        })
        .catch(error => {
            console.error('Error registering user:', error);
            alert('error')
        });
}

return (
    <div className='aunth'>
        <div className="a-login-container">
            <h2 className='a-heading-container'>Login to an existing account</h2>
            <form onSubmit={handleSubmit} >
                <label>Email:</label><br></br>
                <input className="a-input-container" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" type='email' placeholder="Enter Your Email" required></input><br></br>
                <label>Password:</label><br></br>
                <input className="a-input-container" value={password} onChange={(e)=>{setPassword(e.target.value)}} name="password" type='password' placeholder="Enter Your Password" required></input><br></br>
                <button className="a-button" type='submit' >Login</button>
            </form>
        <a href='/signup'>SignUp</a>
        </div>
    </div>
      

  )
}

export default Login;
