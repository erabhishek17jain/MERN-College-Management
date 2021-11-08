import React from 'react';
import tmuLogo from '../assets/images/tmu-logo.png';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dard bg-light">
            <a className="navbar-brand" onClick={props.homePage}>
                <img width="150px" src={tmuLogo} />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" onClick={props.homePage} >Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={props.aboutPage} >About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={props.contactPage} >Contact</a>
                    </li>
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Login
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" onClick={() => props.facultyStudentLoginPage('student')}>Student login</a>
                        <a className="dropdown-item" onClick={() => props.facultyStudentLoginPage('faculty')}>Faculty login</a>
                        <a className="dropdown-item" onClick={props.adminLoginPage}>Admin login</a>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default NavBar
