import { Teacher } from "./Teacher";
import {teacher} from '../data/teacherdata'
import React from "react";

export function Teachers(){
    const teachernew =teacher.map((teacher) => <Teacher teacher={teacher}/>);
    return <div className="c">

    <div className="course-page">
       
        {teachernew}
       
    </div>
    </div>
    
    }