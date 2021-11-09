import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import BackPage from './BackPage'

const ContactTMU = (props) => {
    const history = useHistory()
    return (
        <div className="container-fluid">
            <BackPage />
        </div>
    )
}

export default ContactTMU
