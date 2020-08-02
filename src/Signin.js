import React from 'react';
import './Signin.css'
import {
  Link
} from "react-router-dom";

function Signin() {
  return (
     <div className='signin'>
       <div className='form'>
        Email:   <input /> <br/>
        password:<input type='textbox' /> <br/>
        <Link to="/">
          <button> signin </button> 
        </Link>
       </div> 
     </div>    
  );
}

export default Signin;
