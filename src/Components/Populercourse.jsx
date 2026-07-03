import React from 'react'
import "./Populercourse.css"
import { GoClockFill } from "react-icons/go";

function Populercourse() {
    return (
        <>
            <div className='populer'>
                <div >
                    <div className='populertext2'><h3>Our Popular Courses</h3></div>
                    <div className='populertext3'><p>“Gain the skills that shape your success.”</p></div>
                </div>

                <div className='populer1' >

                    <div className='populercourse1'>
                        <div> <img src="https://res.cloudinary.com/dd9x2y4is/image/upload/v1775106501/ambience_banner_2_fctwzj.png" alt="" height='275px' width='350px' /></div>

                        <div>
                            <ul>WEB DEVELOPMENT</ul>
                            <h3>MERN Stack Development</h3>
                            <p>Master MERN Stack development and build powerful, modern web applications with real industry skills.</p>

                            <div className='icons'>
                                <label className='populeicon'><GoClockFill /> 01 Years</label>
                                <button className='populebutton'>VIEW DETAILS</button>
                            </div>
                        </div>
                    </div>

                    <div className='populercourse2'>
                        <div><img src="https://res.cloudinary.com/dd9x2y4is/image/upload/v1775106419/ambience_banner_3_seoel1.png" alt="" height='275px' width='350px' /></div>

                        <div>
                            <ul>OFFICE APPLICATIONS</ul>
                            <h3>Advance Excel</h3>
                            <p>Master Advance Excel skills to analyze data, automate tasks, and boost workplace productivity efficiently.</p>

                            <div className='icons'>
                                <label className='populeicon'><GoClockFill /> 04 Months</label>
                                <button className='populebutton'>VIEW DETAILS</button>
                            </div>
                        </div>
                    </div>

                    <div className='populercourse3'>
                        <div><img src="https://res.cloudinary.com/dd9x2y4is/image/upload/v1774872358/ambience_banner_1_afs7po.png" alt="" height='275px' width='350px' /></div>

                        <div>
                            <ul>MARKETING</ul>
                            <h3>Digital Marketing</h3>
                            <p>Master digital marketing skills and boost brand visibility, engagement, conversions, and long-term growth.</p>

                            <div className='icons'>
                                <label className='populeicon'><GoClockFill /> 06 Months</label>
                                <button className='populebutton'>VIEW DETAILS</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Populercourse
