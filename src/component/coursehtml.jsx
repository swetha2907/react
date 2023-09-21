import React from 'react';
import './course.css';
function Course() {
    return (
      <div className="course1">
        <div className='innercourse'>
        <div className="container">
      <img src="alarm.png" alt="Image" className="image" />
      <h3 className="heading1">RoadMap strategy</h3>
    </div>
           
            <p>A strategy roadmap describes the what and the why. An execution plan describes the how. A strategy roadmap is not a visual Gantt chart of activities with start dates and end dates.</p>
        </div>
        <div className='innercourse'>
            <div className="container">
      <img src="webicon.png" alt="Image" className="image" />
      <h3 className="heading1">Web Development</h3>
    </div>
            
            <p>A strategy roadmap describes the what and the why. An execution plan describes the how. A strategy roadmap is not a visual Gantt chart of activities with start dates and end dates.</p>


        </div>
        <div className='innercourse'>
        <div className="container">
      <img src="appicon.png" alt="Image" className="image" />
      <h3 className="heading1">App Development</h3>
    </div>
            <p>A strategy roadmap describes the what and the why. An execution plan describes the how. A strategy roadmap is not a visual Gantt chart of activities with start dates and end dates.</p>

        </div>
        
        
      </div>
    );
  }
  
  export default Course;