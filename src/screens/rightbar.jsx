import React,{useState} from 'react'


import Course1 from '../ui/web.png';
import Course2 from '../ui/web2.jpg';

export default function Rightbar() {

  const [ popularCourse, setPopularCourse] = useState([
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
    },
    {
        ID: 2,
        title: "Learning How to create Beautiful illustrate design in 60 minutes",
        tutor: {
            ID: 1,
            name:'Uran Design',
            username:'@urandesign',
            dp: "http://placeimg.com/100/100/people?tutor-" + 2,
        },
        duration:'1 hr 12 min',
        poster: Course2
    },
    {
      ID: 3,
      title: "Learning How to create Beautiful illustrate design in 60 minutes",
      tutor: {
          ID: 1,
          name:'Lana Mardiana',
          username:'@lanamariadana',
          dp: "http://placeimg.com/100/100/people?tutor-" + 3,
      },
      duration:'2 hr 10 min',
      poster: Course1      
  }
])
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
        <div className="rightbar rel">

          <div className="section section-b rel">
             <h2 className="title s24 fontb"> Advanced <span className="fontn">Search </span>   </h2>             
             <div className="searchbox rel flex">
               <input type="text" className="qry s15 fontb" placeholder="Startwriting something"  name="" id=""/>
               <button className="go cfff s15 fontb">Search</button>
             </div> 
          </div>

          <div className="section section-b rel">
             <div className="courses rel flex">
               
               <div className="course-a">
                {courseList[0]}             
               </div>

                
             </div> 
          </div>

        </div>
    );
}
