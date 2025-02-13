
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import img from '../image/hero-bg.jpg'
const Homepage = () => {
   return (
      <div>
         <Navbar />
         <main className="container main mt-0 ">
            <section id="hero" className="hero section" data-aos="fade-up" style={{}}>
               <div className="color-overlay d-flex  " data-aos="zoom-out" data-aos-delay="100">
                  <div className="row mt-1" style={{ marginTop: '' }} >
                     <div className="col-md-6 my-auto text-center">
                        <div className="">

                           <h2>Tara Khadka</h2>
                           <p>I'm a professional React Developer from Kathmandu Nepal</p>
                           <a href="/About" className="btn-get-started bg-danger rounded rounded-3 p-2 m-1 text-white">About Me</a>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <img src="https://cdn.pixabay.com/photo/2021/06/15/16/11/man-6339003_1280.jpg" className="img-fluid" alt="" />
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </div>
   )
}

export default Homepage