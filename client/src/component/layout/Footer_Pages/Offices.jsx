import React from 'react'
import './Offices.css'

const Offices = () => {
  return (
    <div className="page-wrapper"> {/* Wrapper for the entire page */}
    <header>
        <h1>Our Offices</h1>
    </header>

    <section>
        <h2>Mumbai Office</h2>
        <p>123 Main Street<br/>Vile Parle,East<br/>Maharashtra</p>
    </section>

    <section>
        <h2>Delhi Office</h2>
        <p>456 High Street<br/>Chandni Chowk<br/> Delhi</p>
    </section>

    <section>
        <h2>Indore Office</h2>
        <p>789 Tokyo Avenue<br/> Gandhinagar<br/> Madhya Pradesh</p>
    </section>
</div>
  )
}

export default Offices