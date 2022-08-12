import React from "react"
import { ITeacher} from "../data/teacherdata";
interface PostProp{
    teacher: ITeacher
  }
export function Teacher({teacher}:PostProp){
    return(
        // <div>

<div className="card-teacher">
    <div className="content">

{/* <div className="content">CONTENT</div> */}
{/* <img src={teacher.imgurl1} className="img-teacher"/> */}
  <h1>{teacher.name}</h1>
  <p >{teacher.descaription}</p>
    </div>
</div>
        // </div>
    )}