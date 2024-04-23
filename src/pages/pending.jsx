import React from 'react'
import NavBar from '../components/navigation/navbar'
import Footer from '../components/navigation/footer'
import img from '../assets/images/notfound.png'
import Heading from '../components/text/heading'
import Paragraph from '../components/text/paragraph'

export default function Pending() {
  return (
    <div>
      <NavBar />
      <div className="h-screen pt-36 flex flex-col justify-center items-center text-center ">
        <Heading text={"Page Coming Soon!"} styles={'text-5xl text-green-600  mb-5'}/>
        <Paragraph text='Uh Uh!, Our team of engineers is getting this ready as we speak'/>
        <img src={img} alt="" className=" scale-75" />
      </div>
      <Footer />
    </div>
  );
}
