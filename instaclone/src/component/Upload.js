import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/upload.css";
import Header from "../component/Header";
const Upload = () => {
  const [posts, setposts] = useState({});
  const [img, setimg] = useState({});
  const [datess,setdatess]=useState(" ")

const tempDate = new Date().toString().split(' ');
let generatedDate=tempDate[2]+ " " + tempDate[1] +" " + tempDate[3];


useEffect(()=>{
  setdatess(generatedDate)
},[])

  const navigate=useNavigate();
  const handel = (e) => {
    const Name = e.target.name;
    const InputVal = e.target.value;
    setposts({ ...posts, [Name]: InputVal });
  };
  const handel1 = (e) => {
    const imgss = e.target.files[0];
    setimg({ ...img, imgss });
  };

  const submit = (e) => {
    e.preventDefault();


// form data too create
    const formdata = new FormData();
    formdata.append("Name", posts.Author);
    formdata.append("Location", posts.Location);
    formdata.append("Discription", posts.Discription);
    formdata.append("Dates",datess )
    formdata.append("image", img.imgss);

  axios.post("http://localhost:8000/user", formdata,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) =>{
         console.log(res); 
        }).catch((err) => {
           console.log(err);
        });

        setposts();
        setimg();
        navigate("/home")
     };
    

  return (
    <>
       <Header/>
      <div className="form11">
        <div className="uploadinputBox">
          <span>
            <input
              style={{ width: 254 }}
              type="file"
              onChange={handel1}
              name="image"
            />
          </span>
        </div>
        <label htmlFor="">Author:</label>
        <span>
          <input
            className="input"
            type="text"
            onChange={handel}
            name="Author"
          />
        </span>
        <label htmlFor="">Location:</label>
        <span>
          <input
            className="input"
            type="text"
            onChange={handel}
            name="Location"
          />
        </span>

        <label htmlFor="">Discription:</label>
        <span>
          <input
            className="input"
            type="text"
            onChange={handel}
            name="Discription"
          />
        </span>

        <button type="text" onClick={submit} className="submit">
          Post
        </button>
      </div>
    </>
  );
};

export default Upload;



    
    