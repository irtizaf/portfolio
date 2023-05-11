


import { About } from "./portfolio/about"
import Bottom from "./portfolio/bottom"
import New from "./portfolio/footer"
import { Gird } from "./portfolio/gird"
import { Hero } from "./portfolio/hero"
import Navbar from "./portfolio/navbar"


import { Services } from "./portfolio/services"
import { Summary } from "./portfolio/summary"
import Testamonial from "./portfolio/testamonial"
import ImageSlider from "./portfolio/testamonial"




export default function Home() {
  return (
    <div className="font-irtiza ">
      <Navbar/>
      <Hero/>
      
      <About/>
      <Services/>
      
    <Summary/> 
    <Gird/>
    <Testamonial/>
    <New/>
    <Bottom/>
    
      </div>
    
  )
}