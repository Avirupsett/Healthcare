import React from 'react'
import img2 from '../../assets/section-title-line.png'
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import precautions from './disease_precaution_1.json'

export default function Medication() {
  
  return (
    <section className='d-flex align-items-start form gray-bg' style={{ minHeight:"78vh", paddingTop: "30px", flexDirection: 'column' }}>
      <div className="container" >
        <h1 className='display-5' style={{ fontFamily: "Calibre M", lineHeight: 1.1, color: "rgb(34 54 69 / 90%)", marginBottom: "-2px", letterSpacing: "-0.2px", marginTop: window.innerWidth > 700 ? "5px" : "10px" }}>Precautions</h1>
        <div className='pos-rel' style={{ paddingBottom: "24px" }}>
          <img src={img2} alt="" />
        </div>
        <div className='fs-4 selected2' style={{ fontFamily: "Calibre R" }}>
        <li style={{ listStyleType: "square", fontFamily: "Calibre R", color: "rgb(100, 117, 137)" }}>{precautions[parseInt(sessionStorage.getItem("Disease"))].Symptom_Precaution_0}</li>
        <li style={{ listStyleType: "square", fontFamily: "Calibre R", color: "rgb(100, 117, 137)" }}>{precautions[parseInt(sessionStorage.getItem("Disease"))].Symptom_Precaution_1}</li>
        <li style={{ listStyleType: "square", fontFamily: "Calibre R", color: "rgb(100, 117, 137)" }}>{precautions[parseInt(sessionStorage.getItem("Disease"))].Symptom_Precaution_2}</li>
        <li style={{ listStyleType: "square", fontFamily: "Calibre R", color: "rgb(100, 117, 137)" }}>{precautions[parseInt(sessionStorage.getItem("Disease"))].Symptom_Precaution_3}</li>
        </div>
        <div className='' style={{ position: "absolute", bottom: 0, paddingBottom: "0.5rem" }}>
          <Link to="/form/disease"><button type="button" className="btn btn-primary rounded-2 ms-auto me-auto me-4 my-4 btn_hover" data-mdb-ripple-color="var(--first-color)" style={{ backgroundColor: "#F7F7F7", borderColor: "var(--first-color)", padding: "9px 20px", fontSize: "14px", marginTop: "20px", color: 'var(--first-color)', fontFamily: 'SF Mono' }}><BiChevronLeft size={24} style={{ verticalAlign: "-7.5px" }} />  Back</button></Link>
        </div>
        <div className='' style={{ paddingRight: "3rem", position: "absolute", bottom: 0, right: 0, paddingBottom: "0.5rem" }}>
          <Link to="/"><button type="button" className="btn btn-primary rounded-2 ms-auto me-auto me-4 my-4 btn_hover" data-mdb-ripple-color="var(--first-color)" style={{ backgroundColor: "var(--first-color)", borderColor: "var(--first-color)", padding: "9px 20px", fontSize: "14px", marginTop: "20px", color: '#FFF', fontFamily: 'SF Mono' }}>Finish <BiChevronRight size={24} style={{ verticalAlign: "-7.5px" }} /> </button></Link>
        </div>
      </div>
    </section>
  )
}
