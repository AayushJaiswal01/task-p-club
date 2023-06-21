import React from 'react'
import Header from './Header';
import { useLocation } from 'react-router-dom';
import "./CoursePage.css";
import initialDetails from "../data/courseinfo";
import ReviewCard from './ReviewCard';
import { Margin } from '@mui/icons-material';
import {reviews} from '../data/coursereviews';
import { useState,useEffect } from 'react';



function CoursePage() {
    const {state} = useLocation();
    const {name,id} = state;
   

  return (
    
<div className='course_info'>
<Header/>
<div className='title'>
<h1 >
    {initialDetails[id-1].course_title} 
    </h1>
</div>

    <h3 className='heading'>
      {name}
    </h3>
    <h3>
        Contents:
    </h3>
    <p className='details'>
        {initialDetails[id-1].content}
    </p>
    <h3 className='inst_head'>
        Course Instructors:
    </h3>
    <h2 className='inst'>
    Nilesh Bhadve (2020-21)
    </h2>
    <h2 className='inst'>
    Kantesh Balani(2019-20)
    </h2>
    <h2 className='inst'>
    Somnath Bhowmick(2018-19)
    </h2>
    <a href="https://drive.google.com/drive/u/0/folders/1sxapMDzXMIcguEZW5GOQULD_UEE7msTP">
    <button  className='button-57'>
        Assignments
    </button>

    </a>
   
    <a href="https://drive.google.com/drive/u/0/folders/1sxapMDzXMIcguEZW5GOQULD_UEE7msTP">
    <button  className='button-57'>
        PYQ's
    </button>

    </a>
    <a href="https://drive.google.com/drive/u/0/folders/1sxapMDzXMIcguEZW5GOQULD_UEE7msTP">
    <button  className='button-57'>
        TextBooks
    </button>

    </a>
    
    <h3 className='txt'>
        Course Reviews-
    </h3>
    <div className='reviewcard'>
    
  {
    reviews.map((review) =>
   {
    return review.course_title== initialDetails[id-1].course_title?
    <ReviewCard name={review.name} content={review.content } year="2022" course_title={review.course_title}/>
    :
    console.log("..");})
    
  }
        
    
    
    

    </div>
    
   

</div>
   

    
  )
}

export default CoursePage