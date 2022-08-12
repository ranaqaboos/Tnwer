import { Course } from "./Course";
import {course} from '../data/data'
import React from "react";

export function Courses(){
    const postnew = course.map((course) => <Course course={course}/>);
    return <div className="c">

    <div className="course-page">
       
        {postnew}
       
    </div>
    </div>
    
    }