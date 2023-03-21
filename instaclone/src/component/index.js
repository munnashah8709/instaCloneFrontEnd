import React from 'react'
import { Link, Outlet} from 'react-router-dom';
import "../style/index.css"


function Index() {

  return (
    <>
<div className="cantained">
  <div className="row">
    <div className="col-5">
     
    </div>
    <div className="col-6">
    <div className='cont'>
        <h1>WellCome to Instaclon</h1>
    </div>
    <Link to={"/home"}>  <button className='btn' >Enter</button></Link>   
    </div>
  </div>
</div>
<Outlet />
  </>


  )}

export default Index;
