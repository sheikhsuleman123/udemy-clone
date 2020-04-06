import React,{useState} from 'react';
import logo from '../ui/ulogo.svg';
import home from '../ui/home.png';
import horn from '../ui/bullhorn.png';
import tag from '../ui/price-tag.png';
import Bcase from '../ui/briefcase.png';
import Horn from '../ui/bullhorn.png';

import '../css/App.css';

export default function Sidebar() {

    const [nav, setNav] = useState([
        {label:'Home',slug:'/',icon:home},
        {label:'Discover',slug:'discover',icon:horn},
        {label:'Catagories',slug:'catagorie',icon:tag},
        {label:'My Courses',slug:'courses',icon:Bcase},
    ])

    const [currentPage,setCurrentPage] = useState("/");

    var navigation = [];
    for(let i =0; i < nav.length; i++){
        navigation.push(
            <li key={"nav-" + i + "-" + nav[i].slug}> 
             <a href={nav[i].slug} className={"aic link noul flex c333" + (currentPage === nav[i].slug ? "on" : " " )}>
               <div>
                  <img  src={nav[i].icon} /> 
                </div>
        <h2 className="lbl s15">{nav[i].label}</h2>
                </a>
            </li>
        )
    }
    return (
        <div className="sidebar fixed ">
            <a href="#" className="logo bl">
                <img src={logo} className="bl ico"/>
            </a>
            <ul className="nav">
            {navigation}        
            </ul>
            
            <div className="updated-course flex aic">
              <div><img src={Horn} className="ico bl s24" /> </div>
              <div className="lbl s13 fontb c333">Updated Course</div> 
            </div>
              <h2 className="authore s13 c777 mr20">by Muhammad Suleman</h2>
        </div>
    )
}
