import React from "react";
import {NavLink} from "react-router-dom";
import Display from './Display';

const Home = () => {
  return (
    <>
    <Display/>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
                <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                    <h1>
                        Schedule Your Daily Food with <strong className='brand_name'> Meal.</strong>
                    </h1>
                    <div className='mt-3'>
                        <NavLink to='/service' className='btn-get-started'>Let's Come</NavLink>
                    </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                    {/* <img src={} className='img-fluid animated' alt='Home Page Image'/> */}
                </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
