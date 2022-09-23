import React from 'react'
import img from '../assets/blue_bg.png'
import './Header.css'
import {
    Link
} from "react-router-dom";


export default function Header() {
   
    return (
            
        <section className='d-flex align-items-center' id="head" style={{ marginTop: '-35px',minHeight: "100vh" }}>
            <div className='container'>
            <div className="row  mb-5 flex-lg-row-reverse align-items-center ">
                <div className="col-xl-6 col-lg-5 mb-4 mb-md-0 w_image pe-0">
                    <img src={img} className="mb-1" alt="" style={{ width: "135%", marginLeft: "-130px",paddingBottom:"1rem" }} data-builder-edit="image" data-builder-name="image1" aria-controls="#picker-editor" />
                </div>
                <div className="col-xl-6 col-lg-7 gx-md-1 mb-4 mb-md-0 head" style={{paddingTop:"25px"}}>
                    <h5 className="fs-5 text mb-4 fw-bold" style={{fontFamily:"SF Mono",color:"var(--first-color)",lineHeight:2}}>A ML Based Project</h5>
                    <h2 className="display-5 fw-bold r_size" style={{ color: "rgb(34 54 69 / 90%)",fontFamily:'Domain Dis',lineHeight:1.2,letterSpacing:'1.5px'}}>The Future of Health-<br/>Care & Medication</h2>
                    {/* <h3 className="display-4 fw-bold r_size" style={{ color: "rgb(34 54 69 / 90%)",fontFamily:'Domain Dis',lineHeight:1,letterSpacing:'1.5px'}}></h3> */}
                    <p className="fs-5 text t_size" style={{paddingRight:"85px",color: "#647589", margin: "30px 0px 0px",lineHeight:1.2,fontFamily:'Calibre R' }}>No matter where you are or what time it is, a real-time and accurate diagnosis of disesase is always available. This technology has the potential to save lives, and it's only going to get better.</p>

                    <Link to="/form/symptoms"><button type="button" className="bg btn btn-primary rounded-9 ms-auto me-auto me-4 my-5 btn_hover b_size" data-mdb-ripple-color="var(--first-color)" style={{ background: "var(--first-color) var(--mdb-gradient)", borderColor: "var(--first-color)", padding: "16px 22px", fontSize: "14px", marginTop: "20px",color:'#FFF',fontFamily:'SF Mono' }}>Check up your Health</button></Link>

                </div>
                </div>
            
            </div>
            {/* <img src={img} alt="" style={{width:"70vw",height:"90vh"}}/> */}
        </section>
    )
}
