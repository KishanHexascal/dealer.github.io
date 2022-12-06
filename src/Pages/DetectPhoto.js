import React from "react";
import elips from "../assts/elipsNav.png";
import admin from "../assts/pic-admin.png";
import notific from "../assts/notification.png";
import cart from "../assts/cart-car.png";
import { Link } from "react-router-dom";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import { FiCheckCircle } from "react-icons/fi";

const DetectPhotos = () => {
  return (
    <>
      <div className="">
        <div className="row">
          <input type="checkbox" id="click" />
          <label for="click">
            <BiMenu className="icon" />
          </label>
          <div className="d-sidebar col-2">
            <img src={elips} alt="" className="d-elips" /> LOGO
            <h6 className="menu m-3">MENU</h6>
            <Link to="/dashbord" className="txtdeco">
              <img src={cart} alt="" className="ms-4 me-2" /> Add Car
            </Link>
          </div>

          <div className="d-main col-lg-10 col-md-10 col-sm-12">
            <div className="d-navabr">
              <img src={elips} alt="" className="d-elipshide" />
              <img src={notific} alt="" className="me-4 notific" />
              <Link to="/photos" className="txtdeco">
                {" "}
                <img src={admin} alt="" className="p-admin" />
              </Link>
              <span className="mt-1 dropdown insp">
                <button className="dropbtn i-select">inspector < BiChevronDown/></button>
                <span class="dropdown-content">
                  <Link to="/">log out</Link>  
                </span>
              </span>
            </div>
            <h6 className="m-3 add-car">ADD CAR</h6>

            <div className="d-containe m-4">
              <h6 className="fw-bold mb-4">Detect Photos</h6>
              <button
                type="file"
                className="btn-primary btn clrSelct pduplosdfile me-3"
              >
                <FiCheckCircle /> selected 2 Items
              </button>

              <div className="row mt-4">
                <div className=" col-6 col-lg-3 col-md-3 col-sm-6">
                  <div className="boximg">
                    <label class="containerSelect">
                      <input type="checkbox" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <h6 className="text-center mt-3">Photo 1.jpg</h6>
                  <p className="text-center clrpt">119 KB</p>
                </div>
                <div className="col-6 col-lg-3 col-md-3 col-sm-6">
                  <div className="boximg">
                  <label class="containerSelect">
                      <input type="checkbox" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <h6 className="text-center mt-3">Photo 1.jpg</h6>
                  <p className="text-center clrpt">119 KB</p>
                </div>
                <div className="col-6 col-lg-3 col-md-3 col-sm-6">
                  <div className="boximg">
                  <label class="containerSelect">
                      <input type="checkbox" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <h6 className="text-center mt-3">Photo 1.jpg</h6>
                  <p className="text-center clrpt">119 KB</p>
                </div>
                <div className="col-6 col-lg-3 col-md-3 col-sm-6">
                  <div className="boximg">
                  <label class="containerSelect">
                      <input type="checkbox" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <h6 className="text-center mt-3">Photo 1.jpg</h6>
                  <p className="text-center clrpt">119 KB</p>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary btnfinish px-5 py-2 mx-5"
            >
              Finish Add Car
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetectPhotos;
