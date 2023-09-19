import React, {useRef,useState} from 'react';
import ReactDOM from 'react-dom';
import Socio from "../Socio.png"

import './styles/loginSignUp.css'; 


function LoginPage(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

   const signIn = <div className="leftSide">
   <img className="logo" src={Socio}/>
    <form className='form'>
      <h1>Sign In</h1>
      <label>Email Address</label>
      <br></br>
      <input type='email' value={username} required onChange={(e) => {handleChange(e)}} placeholder='demo@example.com' className='formInput' id="usernameInput"></input>
      <br></br>

      <label>Password</label>
      <br></br>
      <input type='password' value={password} required onChange={(e)=> {handlePasswordChange(e)}} placeholder='Enter Password' className='formInput' id="passwordInput"></input>
      <br></br>
      <input type='submit' value="Sign In" className='loginButton'></input>
      <br></br>
   
      <p>Don't have an account? <a>Sign Up</a></p>
    </form>
    </div>
    const handleChange =(e)=>{
        setUsername(e.target.value);
    }

    const handlePasswordChange =(e)=>{
        setPassword(e.target.value);
    }
    return(
        <div className="loginPage">
            
            <div className="leftSide">
                 <img className="logo" src={Socio}/>
                <form className='form'>
                    <h1>Sign In</h1>
                    <label>Email Address</label>
                    <br></br>
                    <input type='email' value={username} required onChange={(e) => {handleChange(e)}} placeholder='demo@example.com' className='formInput' id="usernameInput"></input>
                    <br></br>

                    <label>Password</label>
                    <br></br>
                    <input type='password' value={password} required onChange={(e)=> {handlePasswordChange(e)}} placeholder='Enter Password' className='formInput' id="passwordInput"></input>
                    <br></br>
                    <input type='submit' value="Sign In" className='loginButton'></input>
                    <br></br>
                 
                    <p>Don't have an account? <a>Sign Up</a></p>
                </form>
            </div>

            <div className='rightTextContainer'>
                        <label><span style={{color: 'black'}}>Memories</span> that last <br/>forever</label>
                        <p>Connect with your Friends like never before</p>
            
                    </div>

                    <div className='bottomPage'>
                        <div className='card' id='card1'></div>
                        <div className='card' id='card2'></div>
                        <div className='card' id='card3'></div>

                    </div>

            <div className="rightSide">
                <div className="insideRight">
                </div>
            </div>
        </div>  
    );
}

export default LoginPage;