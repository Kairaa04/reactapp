import { useState } from "react";
import React  from 'react'
import Navbar from "./Navbar";

export default function Form() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [college, setCollege] = useState("");
    const [branch, setbranch] = useState("");
    const [Tech, setTech] = useState("");
    const [click, setClick] = useState("");
    const [select, setSelect] = useState("");
    const [update, setupdate] = useState("");

    const handleName = (event) =>{
      setName(event.target.value)
    }

    const handleAddress = (event) =>{
        setAddress(event.target.value)
    }
    
    const handleCollege = (event) =>{
        setCollege(event.target.value)
    }
    
    const handleBranch =(event) =>{
        setbranch(event.target.value)
    }

    const handleTech = (event) =>{
        setTech(event.target.value)
    }
    const handleSelect = (event) =>{     
        setSelect(event.target.value)
        setupdate(update + " "+ event.target.value)
    }

  return (
    <>
    <Navbar/>
    <div className='demo'>
        <h2>FORM</h2>
        <div className="demo1">
            <label htmlFor="Name"> Name </label>
            <input type="text" onChange={handleName}  placeholder='Enter Your Name'/>
        </div>
        <div className="demo2">
            <label htmlFor="Address" > Address </label>
            <input type="text" onChange={handleAddress}   placeholder='Enter Your Address'/>
        </div>
        <div className="demo3">
            <label htmlFor="College Name"> College Name </label>
            <input type="text"   onChange={handleCollege}   placeholder='Enter Your Collega Name'/>
         <div className="demo4">  
             <div className='radio'>
                <label htmlFor="">Branch</label>
                <input type="radio" id="html" name="fav_language" value="CSE"/ >
                  <label for="html">CSE</label>
                <input type="radio" id="css" name="fav_language" value="IT"/>
                  <label for="css">IT</label>
                 <input type="radio" id="javascript" name="fav_language" value="AD"/>
                  <label for="javascript">AD</label>
                </div>
            </div>  
            <div className="demo4">
                <label htmlFor="tech stack ">Tech Stack</label>
                <select name="options"  onChange={handleSelect}     id="languages">
                    <option value="">Select</option>
                    <option value="Python">Python</option>
                    <option value="JAVA">JAVA</option>
                    <option value="JavaSript">JavaScript</option>
                    <option value="HTML">HTML</option>
                    <option value="RUBY">RUBY</option>
                </select>
               <div> <h6><span>{update}</span></h6></div>
                </div> 
           <div className="demo5" > <button type='button'>Submit</button></div>
        </div>

    
    </div>
    </>
  )
}


