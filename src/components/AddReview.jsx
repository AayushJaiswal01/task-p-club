import React from 'react';
import "./AddReview.css";
import Header from './Header';
import {reviews,coursereviews }from '../data/coursereviews';
import { useState,useEffect } from 'react';


function AddReview() {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
  return (
    <div className='body' >
    <Header/>
 
    <form className='form'>      
  <input
   onChange={(e) => setName(e.target.value)}
   type="text" className="feedback-input" placeholder="Student Name" />   
  <input type="text" 
   onChange={(e) => setTitle(e.target.value)}
  className="feedback-input" placeholder="Course Title" />
  <textarea 
   onChange={(e) => setContent(e.target.value)}
   className="feedback-input" placeholder="Course Feedback"></textarea>
  <input type="submit" 
  onClick={()=>{
       alert("Submitted Successfully!");
    }}
  value="SUBMIT"/>
</form>
 
 
    </div>
  )
}

export default AddReview