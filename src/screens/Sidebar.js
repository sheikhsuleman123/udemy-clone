import React,{useState} from 'react';
import logo from '../ui/ulogo.svg';
import home from '../ui/home.png';
import horn from '../ui/bullhorn.png';
import tag from '../ui/price-tag.png';
import Bcase from '../ui/briefcase.png';

import '../css/App.css';

export default function Sidebar() {

    const [nav, setNav] = useState([
        {label:'Home',slug:'/',icon:home},
        {label:'Discover',slug:'discover',icon:horn},
        {label:'Catagories',slug:'catagorie',icon:tag},
        {label:'My Courses',slug:'courses',icon:Bcase},
    ])

    var navigation = [];
    for(let i =0; i < nav.length; i++){
        navigation.push(
            <li>
             <a href={nav[i].slug} className="link noul flex c333">
               <div>
                  <img  src={nav[i].icon} /> 
                </div>
        <h2 className="lbl s20">{nav[i].label}</h2>
                </a>
            </li>
        )
    }
    return (
        <div className="sidebar fixed">
            <a href="#" className="logo bl">
                <img src={logo} className="bl"/>
            </a>
            <ul className="nav">
            {navigation}        
            </ul>
        </div>
    )
}
