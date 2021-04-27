import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { useHistory } from 'react-router';
import config from "../config";

export const ForgotPassword = (props) => {


  const history = useHistory();

  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
   
    if(username === ''){

      window.alert("Please enter valid email");

    }else{

      e.preventDefault();  
      let configS = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
  
        let data = {
          email: username,      
        };
  
        try {
          const response = await axios.post(
            `${config.localApiUrl}api/forgot-password/`,
            data,
            configS
          );
          
          console.log(response);
          console.log("Email sent to you");
          history.push('/home');
        } catch (e) {
          if(e)
          {
              window.alert("Email not found");
          }
        }
    }

  }

  return (
      <div className="mainlogin">
            <div className="headerlogin">
            <h3>Reset Password From</h3>
        </div>

    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      
<form >
            <div className="form-group text-left">
                <label htmlFor="Email">Email Address</label>
                <input type="email" 
                       className="form-control" 
                       id="UName" 
                       placeholder="Enter Your Email Address" required                      
                       onChange={e => setUsername(e.target.value)}
                />
                </div>
                <input type="button" value={loading ? "loading.." : "Send My Password"} disabled={loading} onClick={handleLogin} /> <br/><br/>
   


</form>
     
    </div>
    <br/> <br/>
    <p>Not Registered ?  <a href="/newhome">Sign up !!</a> </p> 
    </div>

  )
}

export default ForgotPassword;
