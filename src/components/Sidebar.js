import React, { useCallback, useEffect, useState } from 'react'
import About from './About'
import Department from './Department'
import Header from './Header'
import './Sidebar.css'
import Team from './Team'
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useHistory
} from "react-router-dom";
import Form from './Form'
import { BsSun, BsFillMoonFill,BsFillXDiamondFill,BsFilterLeft,BsHouseDoor,BsInfoCircle,BsGrid,BsFillPeopleFill } from "react-icons/bs";
import { motion } from "framer-motion"

export default function Sidebar() {

    const match = useRouteMatch({
        path: "/",
        strict: true,
        sensitive: true
    });
    const history = useHistory()
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId)

        // Validate that all variables exist
        if (toggle && nav && bodypd && headerpd) {
            // toggle.addEventListener('click', () => {
            // show navbar
            nav.classList.toggle('show')
            // change icon
            toggle.classList.toggle('bx-x')
            // add padding to body
            bodypd.classList.toggle('body-pd')
            // add padding to header
            headerpd.classList.toggle('body-pd')
            // })
        }
    }

    const [scroll, setScroll] = useState(window.scrollY)
    const handleActive = useCallback(
        () => {
            setScroll(window.scrollY)
            if (scroll >= 0 && scroll <= window.innerHeight) {
                document.getElementById("home").classList.add('active')
                document.getElementById("about").classList.remove('active')
                document.getElementById("department").classList.remove('active')
                document.getElementById("team").classList.remove('active')
            }
            else if (scroll > window.innerHeight && scroll <= window.innerHeight + window.innerHeight * 1.2) {
                document.getElementById("about").classList.add('active')
                document.getElementById("home").classList.remove('active')
                document.getElementById("department").classList.remove('active')
                document.getElementById("team").classList.remove('active')
            }
            else if (scroll > window.innerHeight * 2.0 && scroll <= window.innerHeight + window.innerHeight * 2.2) {
                document.getElementById("home").classList.remove('active')
                document.getElementById("about").classList.remove('active')
                document.getElementById("department").classList.add('active')
                document.getElementById("team").classList.remove('active')
            }
            else if (scroll > window.innerHeight + window.innerHeight * 2.2) {
                document.getElementById("home").classList.remove('active')
                document.getElementById("about").classList.remove('active')
                document.getElementById("department").classList.remove('active')
                document.getElementById("team").classList.add('active')
            }
        },
        [scroll, setScroll],
    )


    useEffect(() => {
        var r = document.querySelector(':root');
        var rs = getComputedStyle(r);
        document.getElementById("exampleColorInput").value = rs.getPropertyValue("--first-color").trim()
        if (localStorage.getItem("DarkMode") === "on") {
            DarkMode("dark")
        }
        else {
            DarkMode("light")
        }
        window.addEventListener("scroll", () => { handleActive() })

    }, [handleActive])

    const scrolling = (e, position) => {
        e.preventDefault();

        if (match.isExact) {
            position = '#' + position;
            const section = document.querySelector(position);
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        else {
            history.push("/")

        }

    };

    const changeColor = (e) => {
        document.documentElement.style.setProperty("--first-color", e.target.value)
        var r = document.querySelector(':root');
        var rs = getComputedStyle(r);
        document.querySelector('meta[name="theme-color"]').setAttribute('content', rs.getPropertyValue("--first-color").trim());
    }
    const [d_mode, setD_mode] = useState("dark")

    function DarkMode(mode) {
        if (mode === "dark") {
            document.body.style.backgroundColor = "#0b0a10"
            document.documentElement.style.setProperty("--black-bg", "#0b0a10")
            document.documentElement.style.setProperty("--heading-color", "#f2f2f2")
            document.documentElement.style.setProperty("--gray-color", "#1b1a1e")
            document.documentElement.style.setProperty("--text-color", "#8892b0")
            localStorage.setItem("DarkMode", "on")
            setD_mode("light")
        }
        else {
            document.body.style = "#f2f2f2"
            document.documentElement.style.setProperty("--black-bg", "#ffffff")
            document.documentElement.style.setProperty("--heading-color", "rgb(34 54 69 / 90%)")
            document.documentElement.style.setProperty("--gray-color", "#f4f9fc")
            document.documentElement.style.setProperty("--text-color", "#647589")
            localStorage.setItem("DarkMode", "off")
            setD_mode("dark")
        }
    }
    return (
        <>
            <section id="body-pd" >
                <motion.header className="header" id="header"
                initial={{ opacity: 0 }}
                animate={{ y: [-50, 0], opacity: [0, 1] }}
                transition={{ ease: [0.645, 0.045, 0.355, 1], duration: .25, }}>
                    <div className="header_toggle" onClick={() => { showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header') }}> <BsFilterLeft className='' id="header-toggle" style={{ fontSize: "2.5rem" }}/> </div>
                    {/* <div class="form-check form-switch">
                        <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    </div> */}
                    <motion.div className='d-flex'
                        
                    >
                        {d_mode === "light" ? <BsSun size={26} style={{ marginRight: "15px", color: "#f2f2f2", cursor: "pointer" }} onClick={() => { DarkMode("light") }} /> : <BsFillMoonFill size={26} style={{ marginRight: "15px", padding: "4px", cursor: "pointer" }} onClick={() => { DarkMode("dark") }} />}

                        <input type="color" className="form-control form-control-color rounded" onInput={changeColor} style={{ padding: "0px 0px", border: "transparent", width: "45px" }} id="exampleColorInput" title="Choose your color" autocompleted="" />
                    </motion.div>

                </motion.header>
                <div className="l-navbar" id="nav-bar">
                    <nav className="nav" style={{ fontFamily: 'SF Mono', fontSize: "1.2rem" }}>
                        <div>
                            <Link to="/" className="nav_logo"> <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ x: [-25, 0], opacity: [0, 1] }}
                                transition={{ ease: [0.645, 0.045, 0.355, 1], duration: .25, delay: .50 }}
                            ><BsFillXDiamondFill className='nav_logo-icon' style={{ fontSize: "1.5rem",marginBottom:"4px" }}/></motion.div> <span className="nav_logo-name">RapidCare</span> </Link>

                            <div className="nav_list">

                                <Link to="/" onClick={(e) => scrolling(e, "head")} className="nav_link active" id="home"> <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ x: [-25, 0], opacity: [0, 1] }}
                                    transition={{ ease: [0.645, 0.045, 0.355, 1], duration: .25, delay: .50 }}
                                ><BsHouseDoor className='nav_icon' style={{ fontSize: "1.5rem" }}/></motion.div> <span className="nav_name">Home</span> </Link>


                                <Link to="/" onClick={(e) => scrolling(e, "info")} className="nav_link" id="about"> <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ x: [-25, 0], opacity: [0, 1] }}
                                    transition={{ ease: [0.645, 0.045, 0.355, 1], duration: .25, delay: .50 }}
                                ><BsInfoCircle className='nav_icon' style={{ fontSize: "1.5rem" }}/></motion.div> <span className="nav_name">About</span> </Link>

                                <Link to="/" onClick={(e) => scrolling(e, "depart")} className="nav_link" id="department"> <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ x: [-25, 0], opacity: [0, 1] }}
                                    transition={{ ease: [0.645, 0.045, 0.355, 1], duration: .25, delay: .50 }}
                                ><BsGrid className='nav_icon' style={{ fontSize: "1.5rem" }}/></motion.div> <span className="nav_name">WorkFlow</span> </Link>

                                <Link to="/" onClick={(e) => scrolling(e, "group")} className="nav_link" id="team"> <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ x: [-25, 0], opacity: [0, 1] }}
                                    transition={{ ease: [0.645, 0.045, 0.355, 1], duration: .25, delay: .50 }}
                                ><BsFillPeopleFill className='nav_icon' style={{ fontSize: "1.5rem" }}/></motion.div> <span className="nav_name">Team</span> </Link>

                            </div>
                        </div>
                        {/* <a href="/" className="nav_link"> <i className='bx bx-message-square-detail nav_icon' style={{ fontSize: "1.5rem" }}></i> <span className="nav_name">Feedback</span> </a> */}
                    </nav>
                </div>
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <About />
                        <Department />
                        <Team />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/form">
                        <Form />
                    </Route>
                </Switch>
            </section>
        </>
    )
}
