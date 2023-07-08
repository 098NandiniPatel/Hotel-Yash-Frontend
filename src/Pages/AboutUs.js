import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import Services from '../components/Services'
import About from '../components/About'

const AboutUs = () => {
  return (
    <>
      <BreadCrumbs name="About Us" />
      <section>
        <About />
      </section>
      <section>
      <h1 className='service-heading'>SERVICES</h1>
      <p className='service-subhead'></p>
        <Services />
      </section>
    </>
  )
}

export default AboutUs