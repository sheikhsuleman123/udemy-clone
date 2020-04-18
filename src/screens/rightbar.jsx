import React from 'react'

export default function Rightbar() {
    return (
        <div className="rightbar rel">
          <div className="section section-b rel">
             <h2 className="title s24 fontb"> Advanced <span className="fontn">Search </span>   </h2>
             
             <div className="searchbox rel flex">
               <input type="text" className="qry s15 fontb" placeholder="Startwriting something"  name="" id=""/>
               <button className="go cfff s15 fontb">Search</button>
             </div> 
          
           </div>
        </div>
    );
}
