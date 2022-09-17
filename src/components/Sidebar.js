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

    return (
        <>
            <section id="body-pd" >
                <header className="header" id="header">
                    <div className="header_toggle" onClick={() => { showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header') }}> <i className='bx bx-menu' id="header-toggle" style={{ fontSize: "2rem" }}></i> </div>

                </header>
                <div className="l-navbar" id="nav-bar">
                    <nav className="nav" style={{ fontFamily: 'SF Mono', fontSize: "1.2rem" }}>
                        <div>
                            <Link to="/" className="nav_logo"> <i className='bx bx-layer nav_logo-icon' style={{ fontSize: "1.5rem" }}></i> <span className="nav_logo-name">RapidCare</span> </Link>

                            <div className="nav_list">

                                <Link to="/" onClick={(e) => scrolling(e, "head")} className="nav_link active" id="home"> <i className='bx bx-home-alt nav_icon' style={{ fontSize: "1.5rem" }}></i> <span className="nav_name">Home</span> </Link>


                                <Link to="/" onClick={(e) => scrolling(e, "info")} className="nav_link" id="about"> <i className='bx bx-info-circle nav_icon' style={{ fontSize: "1.5rem" }}></i> <span className="nav_name">About</span> </Link>

                                <Link to="/" onClick={(e) => scrolling(e, "depart")} className="nav_link" id="department"> <i className='bx bx-first-aid nav_icon' style={{ fontSize: "1.5rem" }}></i> <span className="nav_name">WorkFlow</span> </Link>

                                <Link to="/" onClick={(e) => scrolling(e, "group")} className="nav_link" id="team"> <i className='bx bx-group nav_icon' style={{ fontSize: "1.5rem" }}></i> <span className="nav_name">Team</span> </Link>

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
                    <Form/>
                    </Route>
                </Switch>
            </section>
        </>
    )
}
