import React from "react";
import { Link, useNavigate } from "react-router-dom";
import elips from "../assts/elipsNav.png";

const Signup = () => {
  const Navigate = useNavigate();

  const onSubmit = (e) =>{
     e.preventDefault();
     Navigate('/photos')
  }
  return (
    <>
      <div className="navabrSignup">
        <img src={elips} alt="" className="elips" />
      </div>
      <form className="mainSignUp" onSubmit={onSubmit}>
        <h1 className="titleSignin mb-4">Sign In</h1>

        <div className="mb-3 mx-5">
          <label htmlFor="exampleInputEmail1" className="form-label h6">
            Email 
          </label>
          <input
            type="email"
            className="form-control" placeholder="esther.howard@gmail.com" />
        </div>
        <div className="mb-3 mx-5">
          <label htmlFor="exampleInputPassword1" className="form-label h6">
            Password
          </label>
          <input
            type="password"
            className="form-control" placeholder="w2qdwqwr213eew"
          />
        </div>
        <div className="mb-5 mx-5 h6">
          <label>
            <Link to="/reset-password" className="reset-clr">Reset Password</Link>  
          </label>
        </div>
        <button type="submit" className="btn btn-primary clr px-5 py-2 mx-5">
          Submit
        </button>
      </form>
    </>
  );
};

export default Signup;
