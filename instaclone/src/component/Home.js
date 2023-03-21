import axios from 'axios';
import "../style/Home.css"
import React, { useEffect, useState } from 'react'
import { FiHeart, FiMoreHorizontal, FiNavigation,} from "react-icons/fi";
import {Outlet } from 'react-router-dom';
import Header from './Header';
function Home() {
  const [data, setdata] = useState([]);
  const [likess, setlikes]=useState(0);
  const like=()=>{
       setlikes(likess+1)
  }


  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8000").
      then((res)=>setdata(res.data))
      .catch((err)=>console.log(err));
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getData();
  },[]);
  return (
 <>
 <Header />


<div className='main'>
    {data.map((current,key) => {
      var base64string = '';
      var bytes = new Uint8Array( current.image.data.data );
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        base64string += String.fromCharCode( bytes[ i ] );
      }
      base64string=window.btoa(base64string)
      return (
          <div className="container11" key={key}>
            <div className="card">
              <h4>
                <b>{current.Name}</b>
              </h4>
              <p>
                {current.Location}
                <span className="spn">
                  <FiMoreHorizontal />
                </span>
              </p>
              <img
                src={`data:image/jpg;base64,${base64string}`}
                alt="Avatar"
                style={{ width: "98%", height: "200px" }}/>
              <div>
                <FiHeart onClick={like} />
                <FiNavigation style={{ margin: "10px" }} />
                <span style={{ float: "right" }}>
                  <p>{current.date}</p>
                </span>
              </div>
              <div style={{display:"flex"}}><p>{likess} Likes</p>
                   <p style={{marginLeft:"120px"}}>{current.Dates}</p>
              </div>
              <h6>{current.Discription}</h6>
              <div className="container"></div>
            </div>
          </div>
        );
      })}
</div>
<Outlet />
</>
  )}

export default Home;




