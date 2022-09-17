import React from 'react'
import img2 from '../../assets/section-title-line.png'
import { BiChevronRight,BiChevronLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Disease() {
  return (
    <section className='d-flex align-items-start form gray-bg' style={{ minHeight: "78vh", paddingTop: "30px", flexDirection: 'column' }}>
      <div className="container" >
        <h1 className='display-5' style={{ fontFamily: "Domain Dis", lineHeight: 1.1, color: "#223645", marginBottom: "4px", letterSpacing: "1px" }}>Disease Diagnosis</h1>
        <div className='pos-rel' style={{ paddingBottom: "20px" }}>
          <img src={img2} alt="" />
        </div>
        <div className='' style={{position:"absolute",bottom:0,paddingBottom:"0.5rem"}}>
      <Link to="/form/symptoms"><button type="button" className="btn btn-primary rounded-2 ms-auto me-auto me-4 my-4 btn_hover" data-mdb-ripple-color="var(--first-color)" style={{ backgroundColor: "#F7F7F7", borderColor: "var(--first-color)", padding: "9px 20px", fontSize: "14px", marginTop: "20px",color:'var(--first-color)',fontFamily:'SF Mono' }}><BiChevronLeft size={24} style={{verticalAlign:"-7.5px"}}/>  Back</button></Link>
      </div>
      <div className='' style={{paddingRight:"3rem",position:"absolute",bottom:0,right:0,paddingBottom:"0.5rem"}}>
      <Link to="/form/medication"><button type="button" className="btn btn-primary rounded-2 ms-auto me-auto me-4 my-4 btn_hover" data-mdb-ripple-color="var(--first-color)" style={{ backgroundColor: "var(--first-color)", borderColor: "var(--first-color)", padding: "9px 20px", fontSize: "14px", marginTop: "20px",color:'#FFF',fontFamily:'SF Mono' }}>Next <BiChevronRight size={24} style={{verticalAlign:"-7.5px"}}/> </button></Link>
      
      </div>
      </div>
    </section>
  )
}
