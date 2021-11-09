import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import tmuLogo from '../assets/images/logo.png';

const BackPage = (props) => {
    const history = useHistory()
    return (
        <nav className="navbar navbar-expand-lg navbar-dard bg-light">
            <h4 className="navbar-brand m-0" href="">
                <img width="31px" src={tmuLogo} />
            </h4>
            <a className="nav-link" onClick={history.goBack}>Back</a>
        </nav >
    )
}

export default BackPage
