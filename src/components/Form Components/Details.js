import { motion } from 'framer-motion';
import React from 'react'
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import { Link, useHistory } from 'react-router-dom';
import img2 from '../../assets/section-title-line.png'
import "./Disease.css"
import Swal from 'sweetalert2'

export default function Details() {

    const history = useHistory()
    const HandleStorage = () => {
        let name = null
        let email = null
        let age = null
        let gender = null;

        name = document.getElementById("form4Example1").value
        email = document.getElementById("form4Example2").value
        age = document.getElementById("form4Example3").value

        if (document.querySelector('input[name="inlineRadioOptions"]:checked'))
            gender = document.querySelector('input[name="inlineRadioOptions"]:checked').value
        
        if (name && email && age && gender) {
            sessionStorage.setItem("user_name", name)
            sessionStorage.setItem("user_email", email)
            sessionStorage.setItem("user_age", age)
            sessionStorage.setItem("user_gender", gender)
            history.push("/form/symptoms")
        }
        else {
            Swal.fire('Incomplete Form !', 'Please fill up all the details...', 'warning')
        }


    }


    return (

        <section className='d-flex align-items-start form gray-bg' style={{ minHeight: window.innerWidth > 800 ? "78vh" : "76vh", paddingTop: "30px", flexDirection: 'column' }}>
            <div className="container" >
                <motion.div
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .5 }}
                >
                    <h1 className='display-5' style={{ fontFamily: "Calibre M", lineHeight: 1.1, color: "var(--heading-color)", marginBottom: "-2px", letterSpacing: "-0.2px", marginTop: window.innerWidth > 700 ? "5px" : "10px" }}>Patient Details</h1>
                    <div className='pos-rel' style={{ paddingBottom: "24px" }}>
                        <img src={img2} alt="" style={{ filter: "grayScale(1) opacity(0.6) drop-shadow(0 0 0 var(--first-color))" }} />
                    </div>


                    <div className={`form-outline mb-4 ${window.innerWidth > 600 ? "w-75" : "w-100"} mt-2`} style={{ borderBottom: "1.5px solid var(--first-color)" }}>
                        <input type="text" id="form4Example1" autoComplete='off' name="user_name" required className="form-control" style={{ color: "var(--text-color)", backgroundColor: "var(--gray-bg)", fontFamily: "'Calibre R','Inter','San Francisco','SF Pro Text',-apple-system,system-ui,sans-serif", paddingBottom: "0px", fontSize: "20px" }} />
                        <label className="form-label" htmlFor="form4Example1" style={{ color: "var(--first-color)", backgroundColor: "var(--gray-bg)", fontFamily: "'Calibre M','Inter','San Francisco','SF Pro Text',-apple-system,system-ui,sans-serif", paddingTop: "7px", fontSize: "20px" }}>Patient Name</label>
                    </div>

                    <div className={`form-outline mb-4 ${window.innerWidth > 600 ? "w-75" : "w-100"}`} style={{ borderBottom: "1.5px solid var(--first-color)" }}>
                        <input type="email" id="form4Example2" autoComplete='off' name="user_email" required className="form-control" style={{ color: "var(--text-color)", backgroundColor: "var(--gray-bg)", fontFamily: "'Calibre R','Inter','San Francisco','SF Pro Text',-apple-system,system-ui,sans-serif", paddingBottom: "0px", fontSize: "20px" }} />
                        <label className="form-label" htmlFor="form4Example2" style={{ color: "var(--first-color)", backgroundColor: "var(--gray-bg)", fontFamily: "'Calibre M','Inter','San Francisco','SF Pro Text',-apple-system,system-ui,sans-serif", paddingTop: "7px", fontSize: "20px" }}>Email address</label>
                    </div>

                    <div className='d-flex pt-2'>
                        <div className=" form-check" style={{ paddingTop: "5px", paddingLeft: "5px", paddingRight: "0px", fontFamily: "Calibre M", color: "var(--first-color)", fontSize: "19px" }}>
                            Date of Birth:
                        </div>
                        <div className={` form-check ${window.innerWidth > 600 ? "" : "w-50"}`} >
                            <input type="date" id="form4Example3" name="user_age" required className="form-control" style={{ color: "var(--text-color)", backgroundColor: "var(--gray-bg)", fontFamily: "'Calibre R','Inter','San Francisco','SF Pro Text',-apple-system,system-ui,sans-serif", paddingBottom: "0px", fontSize: "18px" }} />
                        </div>
                    </div>
                    <div className='d-flex' style={{ color: "var(--text-color)", paddingTop: "30px" }}>
                        <div className="form-check form-check-inline" style={{ paddingLeft: "5px", fontFamily: "Calibre M", color: "var(--first-color)", fontSize: "19px" }}>
                            Gender:
                        </div>
                        <div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male" />
                                <label className="" htmlFor="inlineRadio1" style={{ fontFamily: "Calibre R", fontSize: "17px" }}>Male</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female" />
                                <label className="" htmlFor="inlineRadio2" style={{ fontFamily: "Calibre R", fontSize: "17px" }}>Female</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Others" />
                                <label className="" htmlFor="inlineRadio3" style={{ fontFamily: "Calibre R", fontSize: "17px" }}>Others</label>
                            </div>
                        </div>
                    </div>

                </motion.div>
                <div className='' style={{ position: "absolute", bottom: 0, paddingBottom: "0.5rem" }}>
                    <Link to="/"><button type="button" className="btn btn-primary rounded-2 ms-auto me-auto me-4 my-4 btn_hover gray-bg" data-mdb-ripple-color="var(--first-color)" style={{ borderColor: "var(--first-color)", padding: "9px 20px", fontSize: "14px", marginTop: "20px", color: 'var(--first-color)', fontFamily: 'SF Mono' }}><BiChevronLeft size={24} style={{ verticalAlign: "-7.5px" }} />  Back</button></Link>
                </div>
                <div className='' style={{ paddingRight: "3rem", position: "absolute", bottom: 0, right: 0, paddingBottom: "0.5rem" }}>
                    <button onClick={HandleStorage} type="button" className="btn btn-primary rounded-2 ms-auto me-auto me-4 my-4 btn_hover" data-mdb-ripple-color="var(--first-color)" style={{ background: "var(--first-color) var(--mdb-gradient)", borderColor: "var(--first-color)", padding: "9px 20px", fontSize: "14px", marginTop: "20px", color: '#FFF', fontFamily: 'SF Mono' }}>Next <BiChevronRight size={24} style={{ verticalAlign: "-7.5px" }} /> </button>
                </div>
            </div>

        </section>

    )
}
