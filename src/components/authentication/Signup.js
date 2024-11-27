import {React,useState} from 'react';
import './authentication.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Signup = () => {
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [pic,setPic]=useState();

const history=useHistory()

    const NavigateChat=()=>{
        history.push('/chat')
    }
   const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, password };
        axios.post('http://localhost:5000/user/register', JSON.stringify(userData), {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            console.log('User registered successfully:', response.data);
            setName('')
            setEmail('')
            setPassword('')
            localStorage.setItem('token',response.data.token)
            NavigateChat()
        })
        .catch(error => {
            console.error('Error registering user:', error);
            alert('error')
        });
  };
  return (
    <div className='aunth'>
        <div className="a-login-container">
            <h2 className="a-heading-container" >Create a new account</h2>
        <form onSubmit={handleSubmit} >
            <label>Name:</label><br></br>
            <input className="a-input-container" value={name} onChange={(e)=>{setName(e.target.value)}} type='text' placeholder="Enter Your Name" required></input><br></br>
            <label>Email:</label><br></br>
            <input className="a-input-container" value={email} onChange={(e)=>{setEmail(e.target.value)}} type='email' placeholder="Enter Your Email" required></input><br></br>
            <label>Password:</label><br></br>
            <input className="a-input-container" value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder="Enter Your Password" required></input><br></br>
            <label>Your Pic:</label><br></br>
            <input className="a-input-container" type="file" accept="image/*" onChange={(e)=>setPic(e.taget.files[0])}></input><br></br>
            <button className="a-button" type="submit" >Signup</button>
        </form>
        <a href='/login'>login</a>
        </div>
    </div>
  )

  
}

export default Signup
