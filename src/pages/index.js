import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Footer from "../components/Footer"
import ParticlesContainer from "../components/particle"






const IndexPage = () => (
 
 
  <Layout>
     <ParticlesContainer></ParticlesContainer>
    <SEO title="Glen Hood" />
    <Header></Header>
    <Work></Work>
    <About></About>
    <Skills></Skills>
    <Footer></Footer>
  </Layout>
 
  
)

export default IndexPage
