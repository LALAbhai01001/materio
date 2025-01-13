import React from 'react'
import Navbar from '../../components/home/Navbar'
import Button from '../../components/Button'
import Hero from "../../components/Hero"
import Feature from '../../components/Feature'
import Team from '../../components/Team'
import FAQ from '../../components/FAQ'
import ContactUs from '../../components/ContactUs'
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
    <div className="container-fluid bg-img bg-size bg-position height-full">
    <Navbar/>
    <Button/>
    <Hero />
    <Feature/>
    <Team/>
    <FAQ/>
    <ContactUs/>
    <Footer/>
    </div>
    </>
  )
}

export default Home