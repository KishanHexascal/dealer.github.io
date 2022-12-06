import React from "react";
import elips from "../assts/elipsNav.png";

const ResetPass = () => {
  return (
    <>
      <div className="navabrSignup">
        <img src={elips} alt="" className="elips" />
      </div>
      <form className="mainSignUp">
        <h2 className="titleSignin mb-4">Reset Password</h2>
        <div className="mb-3 mx-5">
          <label htmlFor="exampleInputPassword1" className="form-label h6">
             New Password
          </label>
          <input
            type="password"
            className="form-control" placeholder="654321"
          />
        </div>
        <div className="mb-3 mx-5">
          <label htmlFor="exampleInputPassword1" className="form-label h6">
          Repeat New Password
          </label>
          <input
            type="password"
            className="form-control" placeholder="654321"
          />
        </div>
        <div className="mb-5 mx-5">
          <label htmlFor="exampleInputEmail1" className="form-label h6">
          Email to Confirm
          </label>
          <input
            type="email"
            className="form-control email-ipt" placeholder="esther.howard@gmail.com" />
        </div>
        <button type="submit" className="btn btn-primary clr px-5 py-2 mx-5">
          Submit
        </button>
      </form>
    </>
  );
};

export default ResetPass;
