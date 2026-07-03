import React from 'react'
import './Students.css'

function Students() {
    return (
        <>
            <div className='Studente'>

                <div className='Student1'>
                    <div className='Studenttext'>
                        <h3>Our students say</h3>
                    </div>
                    <div className='Studenttext2'>
                        <p>"I gained real skills through practical sessions that helped me grow quickly."</p>
                    </div>
                </div>

                <div className='Student2'>
                    <div className='Student3'>
                        <div className='StudentPhoto'>
                            <img src="https://ambiencecomputereducation.com/img/ambience-student-6.jpg" alt="" height='140px' width='110px' />
                        </div>
                        <div className='Student1text'>
                            <h3>SANJANA</h3>
                            <p>ADCA at Ambience Computer Education was a great experience. The practical lessons, friendly faculty, and clear explanations helped me build strong computer fundamentals.</p>
                        </div>
                    </div>

                    <div className='Student3'>
                        <div className='StudentPhoto'>
                                <img src="https://ambiencecomputereducation.com/img/ambience-student-1.jpg" alt="" height='140px' width='110px' />
                        </div>
                        <div className='Student1text'>
                            <h3>NIKITA</h3>
                            <p>Amazing learning experience. The Digital Marketing training covered everything from basics to advanced tools, making me job-ready with real project knowledge and practical skills.</p>
                        </div>
                    </div>

                    <div className='Student3'>
                        <div className='StudentPhoto'>
                                <img src="https://ambiencecomputereducation.com/img/ambience-student-2.jpg" alt="" height='140px' width='110px' />
                        </div>
                        <div className='Student1text'>
                            <h3>AKSHAT BAJPAI</h3>
                            <p>Amazing MERN learning experience! The step-by-step teaching and hands-on projects helped me understand React, Node, and MongoDB easily.Perfect course for beginners like me.</p>
                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}

export default Students
