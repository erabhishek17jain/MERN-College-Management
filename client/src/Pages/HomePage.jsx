import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import NavBar from './NavBar'

const HomePage = (props) => {
    const history = useHistory()

    const adminLoginPage = () => {
        props.setLogin('admin')
        history.push('/adminLogin')
    }

    const facultyStudentLoginPage = (type) => {
        props.setLogin(type)
        history.push('/facultyStudentLogin')
    }

    const aboutPage = () => {
        history.push('/about')
    }

    const contactPage = () => {
        history.push('/contact')
    }

    const homePage = () => {
        history.push('')
    }
    return (
<div className="container-fluid">
            <NavBar homePage={homePage} contactPage={contactPage} aboutPage={aboutPage} adminLoginPage={adminLoginPage} facultyStudentLoginPage={facultyStudentLoginPage} />
        </div>
    )
}

export default HomePage
