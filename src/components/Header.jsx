import { useState } from 'react';
import SocialLinks from '../components/SocialLinks'
// import logo from '../assets/img/logo.png'
import logo from '../assets/img/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header () {

    const [show, setShow] = useState(false);

    return(
        <header className="heading">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-1 d-flex d-lg-block align-items-center justify-content-between">
                        <a href="/#" className="heading-logo d-block">
                            <img src={logo} alt="" />
                        </a>
                        <button className="d-block d-lg-none heading-thums border-0 p-0 bg-transparent" data-bs-toggle="offcanvas" href="#offcanvasExample" type="button" aria-controls="offcanvasExample" onClick={() => setShow(!show)}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                    <div className={`col-lg-11 text-end heading-mobile ${show ? 'show': ''}`} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <nav className="heading-nav d-flex align-items-center justify-content-end">
                            <ul className="heading-menu">
                                <li><a href="#how_it_work" className="heading-links">How does it work?</a><span className="d-inline-block mx-2">/</span></li>
                                <li><a href="#collections" className="heading-links">Collections</a><span className="d-inline-block mx-2">/</span></li>
                                <li><a href="#mlnt" className="heading-links">Mlnt it</a><span className="d-inline-block mx-2">/</span></li>
                                <li><a href="#road_map" className="heading-links">Road Map</a><span className="d-inline-block mx-2">/</span></li>
                                <li><a href="#team" className="heading-links">Team</a><span className="d-inline-block mx-2">/</span></li>
                                <li><a href="#faq" className="heading-links">FAQ</a><span className="d-inline-block mx-2">/</span></li>
                                <li><a href="/" className="heading-links">Book Now</a></li>
                            </ul>
                            <SocialLinks />
                        </nav>
                    </div>
                </div>
            </div>
    </header>
    
    )
}

export default Header