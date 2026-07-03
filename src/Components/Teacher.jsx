import React from 'react'
import './Teacher.css'

function Teacher() {
  return (
    <>
         <div className='Teachers'>

                <div className='Teacher'>
                    <div className='Teacher1'>
                        <div className='TeacherPhoto'>
                            <img src="https://ambiencecomputereducation.com/img/trainer/Ambience-Director.jpeg" alt="" height='140px' width='130px' />
                        </div>
                        <div className='Teachertext'>
                            <h3>Mr. Sitaram Sir</h3>
                            <p>Digital Marketer and Director</p><br/>
                            <p>BCA & MCA GLA University</p>
                            <h6>Mr. Sitaram Sir, Director of Ambience Computer Education, is an expert digital marketer known for his leadership, innovative teaching approach, and commitment to guiding students toward successful careers.</h6>
                        </div>
                    </div>

                    <div className='Teacher1'>
                        <div className='StudentPhoto'>
                                <img src="https://ambiencecomputereducation.com/img/trainer/Ambience-MD.jpeg" alt="" height='140px' width='130px' />
                        </div>
                        <div className='Teachertext'>
                            <h3>Mr. Radheshyam Sir</h3>
                            <p>Digital Marketer and Director</p><br/>
                            <p>BCA & MCA GLA University</p>
                            <h6>Mr. Radheshyam Sir, Managing Director of Ambience Computer Education, is an expert software developer known for strong technical mastery and passion for empowering students.</h6>
                        </div>
                    </div>



                </div>
            </div>

    </>
  )
}

export default Teacher
