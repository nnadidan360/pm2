import React from 'react'
import 'react-bootstrap'
import './ContentFooter.css'

function ContentFooter() {
    return (

        <div className="c-Footer fixed-bottom">
            <div style={{background:"#fff"}}>
                { new Date().getFullYear() } PRIME Minners
                
            </div>
            
            <div className="ml-auto">
                PRIME Minners LTD.
            </div>

        </div>
    )
}

export default ContentFooter
