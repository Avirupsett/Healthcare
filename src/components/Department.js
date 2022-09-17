import React from 'react'
import img from '../assets/section-back-icon.png'
import img2 from '../assets/section-title-line.png'
import './Department.css'

export default function Department() {
  return (
    <section className='servcies-area gray-bg' id="depart" style={{ minHeight: "100vh",paddingTop:"115px",paddingBottom:"90px",marginTop:"-10px" }}>
        <div className='container'>
        <div className='row'>
            <div className='col-xl-8 offset-xl-2 col-lg-10 offset-lg-1'>
                <div className='section-title text-center pos-rel' style={{marginBottom:"75px"}}>
                    <div className='section-icon'>
                        <img className='section-back-icon' src={img} alt="" />
                    </div>
                    <div className='pos-rel'>
                        <h5 className='fs-4 fw-bolder' style={{marginBottom: "28px",color:"#647589",fontFamily:"SF Mono"}}>WorkFlow</h5>
                        <h1 className='display-2' style={{marginBottom:"18px",color:"#223645",fontFamily:"Calibre S",lineHeight:1.1,letterSpacing:'-2px'}}>Managed Your <br/>Heathcare Services</h1>
                    </div>
                    <div className='pos-rel'>
                        <img src={img2} alt=""/>
                    </div>
                </div>
            </div>
            </div>
        <div className='row'>
            <div className='col-xl-4 col-lg-6 col-md-6'>
                <div className='box text-center'>
                    <div className="thumb">
                        <img src="	https://themepure.net/template/medidove-prv/medidove/img/services/service1.png" alt="" />
                    </div>
                    <div className="content">
                        <h3 className='fs-1'>Symptoms</h3>
                        <p className='fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptas!</p>
                        {/* <a className='fs-6' href='/predict'>Click here</a> */}
                    </div>

                </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-6'>
                <div className='box text-center'>
                    <div className="thumb">
                        <img src="	https://themepure.net/template/medidove-prv/medidove/img/services/service1.png" alt="" />
                    </div>
                    <div className="content">
                        <h3 className='fs-1'>Prediction</h3>
                        <p className='fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptas!</p>
                        {/* <a className='fs-6' href='/predict'>Click here</a> */}
                    </div>

                </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-6'>
                <div className='box text-center'>
                    <div className="thumb">
                        <img src="	https://themepure.net/template/medidove-prv/medidove/img/services/service1.png" alt="" />
                    </div>
                    <div className="content">
                        <h3 className='fs-1'>Precautions</h3>
                        <p className='fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptas!</p>
                        {/* <a className='fs-6' href='/predict'>Click here</a> */}
                    </div>

                </div>
            </div>
        </div>
        </div>
    </section>
  )
}
