import React,{useState} from 'react';

import Course1 from '../ui/web.png';
import Course2 from '../ui/web.png';

export default function Home() {

    const [popularCourse, setpopularCourse] = useState([
        {
            ID: 1,
            title: "Learning How to create Beautiful illustrate design in 60 minutes",
            tutor: {
                ID: 1,
                name:'Lana Mardiana',
                username:'@lanamariadana',
                dp: "http://placeimg.com/100/100/people?tutor-" + 1,
            },
            duration:'82 min',
            poster: Course1      
        }
    ])

    var tutorList = [];
    for(let i= 0; i < 8; i++ ){
        tutorList.push(
            <button className="tutor rel" key={"tutor-live" + i}>
                <img src={"http://placeimg.com/100/100/people" + i } alt="no tutor" className="bl"/>
            </button>
        )
    }

    var courseList = [];
    for(let i= 0; i < popularCourse.length; i++ ){
        courseList.push(
            <a href="#" className="course rel" key={"popular-course" + i}>
                <div className="block rel" style={{background:  " #e2e2e2 url(" + popularCourse[i].poster +" ) no-repeat center" }} >
                
                <div className="user aic abs flex">
                    <div className="pic">
                        <img src={popularCourse[i].tutor.dp} className="bl" alt=""/>
                    </div>
                    <div className="meta rel">
                        <h2 className="s15 fontb name cfff">{popularCourse[i].tutor.name} </h2>
                        <h2 className="s13 fontn username cfff">@{popularCourse[i].tutor.username} </h2>
                    </div>
                </div>
                
                <div className="dura abs">
                <h2 className="s13 fontb name cfff">@{popularCourse[i].duration} </h2>
                </div>
             
                <div className="course-title abs">
                <h2 className="s15 fontb name cfff">{popularCourse[i].title} </h2>
                </div>
             
              </div>
            </a>
        );
    }
    return (
        <div className="home-page rel">
         
            <div className="section rel">
                <h2 className="title s24 fontb"> Streaming <span className="fontn">Now</span>   </h2>
          <div className="tutors rel flex">
                {tutorList}
          </div> 
        </div>
        
        <div className="section section-b rel">
                <h2 className="title s24 fontb"> Populer <span className="fontn">Things</span>   </h2>
          <div className="courses rel flex">
                {courseList}
          </div> 
        </div>
        
        </div>
    )
}
