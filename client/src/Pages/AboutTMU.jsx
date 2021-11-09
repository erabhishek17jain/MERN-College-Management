import React from 'react'
import { useHistory } from 'react-router-dom'
import BackPage from './BackPage'

const AboutTMU = (props) => {
    const history = useHistory()
    return (
        <div className="container-fluid">
            <BackPage />
        </div>
    )
}

export default AboutTMU
