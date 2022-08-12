import React from 'react'
import { Icourse } from '../data/data'
interface PostProp{
    course: Icourse
  }
  
export function Course ({course}:PostProp) {
 	return (
    
        // <divclassName='course-container'>
<div className="card-course">
  <img src={course.imgurl} className="img-course"/>
  <h1>{course.name}</h1>
  <p className="price">{course.price}</p>
  <p>{course.descaription}</p>
  <p><button>اشتراك</button></p>
</div>


        // </div>
        // <div className="row">
        // <div className="column">
        //   <div className="card"> 
        //    <img src="/w3images/jeans3.jpg" alt="Denim Jeans"/>
        //    <h1>{course.name}</h1>
        //    <p className="price">{course.price}</p>
        //    <p>{course.descaription}</p>
        //    <p><button>اشتراك</button></p></div>
        // </div>
        // </div>

    )}