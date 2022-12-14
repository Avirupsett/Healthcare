import React, { useState } from 'react'
import img2 from '../../assets/section-title-line.png'
import encoded from './disease_description_encoded.json'
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion} from 'framer-motion';

export default function Disease() {
  const [disease, setdisease] = useState(-1)

  async function predict(bodycontent) {
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json",
    }

    // let response = await fetch("/predict", {
    //   method: "POST",
    //   body: bodycontent,
    //   headers: headersList
    // });
    fetch("/predict", {
      method: "POST",
      body: bodycontent,
      headers: headersList
    }).then(response => response.json())
      .then(results => {
        setdisease(parseInt(results.results.results))
        sessionStorage.setItem("Disease",results.results.results)
      })
      .catch((error) => {
        console.log(error);
      });
    // let data = await response.json();
    // console.log(data.results.results);
  }

  useEffect(() => {

    let predictdata = sessionStorage.getItem("Symptoms")
    predict(predictdata)

  }, [])

  return (
    <section className='d-flex align-items-start form gray-bg' style={{ minHeight: window.innerWidth > 800 ? "78vh" : "76vh", paddingTop: "30px", flexDirection: 'column' }}>
      <div className="container" >
      <motion.div
        initial={{ opacity: 0,x:-25}}
        animate={{ opacity: 1,x:0 }}
        exit={{ opacity:0 }}
        transition={{ duration: .50 }}
        >
        <h1 className='display-5' style={{ fontFamily: "Calibre M", lineHeight: 1.1, color: "var(--heading-color)", marginBottom: "-2px", letterSpacing: "-0.2px", marginTop: window.innerWidth > 700 ? "5px" : "10px" }}>Disease Diagnosis</h1>
        <div className='pos-rel' style={{ paddingBottom: "24px" }}>
          <img src={img2} alt="" style={{filter:"grayScale(1) opacity(0.6) drop-shadow(0 0 0 var(--first-color))"}}/>
        </div>

        <div className='fs-4 selected2 d-flex' style={{ fontFamily: "Calibre R" }}>
          <div className='' style={{ fontFamily: "Calibre R", color: "var(--first-color)", letterSpacing: '1.2px', minWidth: "max-content", fontWeight: 600, paddingRight: "15px", paddingLeft: "5px" }}>Disease : </div>
          <div style={{ paddingBottom: "20px" }}>
            {disease === -1 ? <div className="spinner-border text-secondary spinner-border-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div> :<div style={{color: "var(--text-color)"}}>{encoded[disease].Disease}</div>}
          </div>
        </div>
        <div className='fs-4 selected2 d-flex' style={{ fontFamily: "Calibre R" }}>
          <div className='' style={{ fontFamily: "Calibre R", color: "var(--first-color)", letterSpacing: '1.2px', minWidth: "max-content", fontWeight: 600, paddingRight: "15px", paddingLeft: "5px" }}>Description : </div>
          <div style={{ paddingBottom: "20px" }}>
            {disease === -1 ? <div className="spinner-border text-secondary spinner-border-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div> : <div style={{color: "var(--text-color)"}}>{encoded[disease].Symptom_Description}</div>}
          </div>
        </div>
        <div className='fs-4 selected2 d-flex' style={{ fontFamily: "Calibre R" }}>
          <div className='' style={{ fontFamily: "Calibre R", color: "var(--first-color)", letterSpacing: '1.2px', minWidth: "max-content", fontWeight: 600, paddingRight: "15px", paddingLeft: "5px" }}>Symptoms : </div>
          <div style={{ paddingBottom: "100px" }}>
            {disease === -1 ? <div className="spinner-border text-secondary spinner-border-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div> :<div style={{color: "var(--text-color)"}}>{sessionStorage.getItem("Selected")}</div>}
          </div>
        </div>
        </motion.div>
        <div className='' style={{ position: "absolute", bottom: 0, paddingBottom: "0.5rem" }}>
          <Link to="/form/symptoms"><button type="button" className="btn btn-primary rounded-2 ms-auto me-auto me-4 my-4 btn_hover gray-bg" data-mdb-ripple-color="var(--first-color)" style={{ borderColor: "var(--first-color)", padding: "9px 20px", fontSize: "14px", marginTop: "20px", color: 'var(--first-color)', fontFamily: 'SF Mono' }}><BiChevronLeft size={24} style={{ verticalAlign: "-7.5px" }} />  Back</button></Link>
        </div>
        <div className='' style={{ paddingRight: "3rem", position: "absolute", bottom: 0, right: 0, paddingBottom: "0.5rem" }}>
          <Link to="/form/medication"><button type="button" className="btn btn-primary rounded-2 ms-auto me-auto me-4 my-4 btn_hover" data-mdb-ripple-color="var(--first-color)" style={{ background: "var(--first-color) var(--mdb-gradient)", borderColor: "var(--first-color)", padding: "9px 20px", fontSize: "14px", marginTop: "20px", color: '#FFF', fontFamily: 'SF Mono' }}>Next <BiChevronRight size={24} style={{ verticalAlign: "-7.5px" }} /> </button></Link>

        </div>
      </div>
    </section>
  )
}
