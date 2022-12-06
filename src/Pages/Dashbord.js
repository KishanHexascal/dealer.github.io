import React from "react";
import elips from "../assts/elipsNav.png";
import admin from "../assts/pic-admin.png";
import notific from "../assts/notification.png";
import cart from "../assts/cart-car.png";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import {Link} from "react-router-dom"


const Dashbord = () => {

  return (
    <>
      <div className="">
        <div className="row">
          <input type="checkbox" id="click" />
          <label htmlFor="click">
            <BiMenu className="icon" />
          </label>
          <div className="d-sidebar col-2">
            <img src={elips} alt="" className="d-elips" /> LOGO
            <h6 className="menu m-3">MENU</h6>
            <img src={cart} alt="" className="ms-4 me-2" /> Add Car
          </div>

          <div className="d-main col-lg-10 col-md-10 col-sm-12">
            <div className="d-navabr">
              <img src={elips} alt="" className="d-elipshide" />
              <img src={notific} alt="" className="me-4 notific" />
              <Link to="/photos" className="txtdeco"> <img src={admin} alt="" className="p-admin" /></Link>
              {/* <label for="inspector" className="mt-1 insp">
                <select name="inspector" className="i-select">
                  <option className="me-5">Inspector</option>
                  <option>Log Out</option>
                </select>
              </label> */}
              <span className="mt-1 dropdown insp">
                <button className="dropbtn i-select">inspector < BiChevronDown/></button>
                <span class="dropdown-content">
                  <Link to="/">log out</Link>  
                </span>
              </span>
            </div>
            <h6 className="m-3 add-car">ADD CAR</h6>
            <div className="d-containe m-4">
              <h6 className="">SUMMERY</h6>

              <div className="row mt-4">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4 fw-bold">
                  <label className="form-label">Name of seller</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Esther"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 mb-4 fw-bold">
                  <label className="form-label">Customer Phone Number</label>
                  <div className="input-group">
                    <span className="input-group-text">+91</span>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="12345678"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 mb-4 fw-bold">
                  <label className="form-label">Year</label>
                  <select className="form-control apr" name="years">
                    <option value="2019">2019</option>
                  </select>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 mb-4 fw-bold">
                  <label className="form-label">Make</label>
                  <select className="form-control apr" name="Chevrolet">
                    <option value="Chevrolet">Chevrolet</option>
                  </select>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 mb-4 fw-bold">
                  <label className="form-label">Modal</label>
                  <select className="form-control apr" name="years">
                    <option value="Trax">Trax</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 mb-4 fw-bold ">
                  <label className="form-label">Trim</label>
                  <select className="form-control apr" name="FWD LTATZ">
                    <option value="FWD LTATZ">FWD LTATZ</option>
                  </select>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 mb-4 fw-bold">
                  <label className="form-label">Mileage</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="120,003"
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 mb-4 fw-bold ">
                  <label className="form-label">Mileage Unit</label>
                  <select className="form-control apr" name="FWD LTATZ">
                    <option value="km">km</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 mb-4 fw-bold">
                  <label className="form-label">Odometer Condition</label>
                  <select
                    className="form-control apr"
                    name="Odometer Condition"
                  >
                    <option value="Original">Original</option>
                  </select>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 mb-4 fw-bold">
                  <label className="form-label">Color</label>
                  <select className="form-control apr" name="Color">
                    <option value="Gray">Gray</option>
                  </select>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 mb-4 fw-bold">
                  <label className="form-label">Specification</label>
                  <select className="form-control apr" name="Specification">
                    <option value="GCC">GCC</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 mb-4 fw-bold">
                  <label className="form-label">Transmission</label>
                  <select className="form-control apr" name="Transmission">
                    <option value="Automatic">Automatic</option>
                  </select>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 mb-4 fw-bold">
                  <label className="form-label">Point</label>
                  <select className="form-control apr" name="point">
                    <option value="Partial Repaint">Partial Repaint</option>
                  </select>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 mb-4 fw-bold">
                  <label className="form-label">Vehicle Option</label>
                  <select className="form-control apr" name="Vehicle Option">
                    <option value="Mid Option">Mid Option</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
