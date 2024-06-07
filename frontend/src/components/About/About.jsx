import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

function About() {
  return <section><div className="container">
    <div className="flex items-center justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
    {/*===========================About img======*/}
    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
        <img src={aboutImg} alt="" />
        <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%] ">
            <img src={aboutCardImg} alt="" />
        </div>
    </div>
    {/*==================about content======*/}
    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
        <h2 className="heading">Proud to be One of the nations best</h2>
        <p className='text__para'>For 30 years in a row, Indian News & World Report has recognized us as one of best hospital in the Nation #1 in Kerala.Lorem </p>
    <p className="text__para mt-[30px]">The first College to be developed as a private partnership model in medical education and health care delivery, KMC, Mangalore ranks among the top 25 medical colleges in the country today; the medical college with the highest ICMR STS awards in the country. The KMC, Mangalore is recognized as one among 20 International Medical Schools by the Educational Commission for Foreign Graduates (ECFMG) for electronic credentials verification program.</p>
    <Link to='/'><button className='btn'>Learn More</button></Link>
    
    </div>


    </div>
    </div>
    </section>
}

export default About;
