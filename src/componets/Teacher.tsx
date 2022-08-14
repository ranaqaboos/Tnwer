import React from "react";
import { ITeacher } from "../data/teacherdata";
import "../Styles/teacher-style.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
interface PostProp {
  teacher: ITeacher;
}
export function Teacher({ teacher }: PostProp) {
  return (
    // <div>

    <div className="gradient-border" id="box">
      <div className="content">
        {/* <div className="content">CONTENT</div> */}
        {/* <img
          src="https://www.holidayscalendar.com/wp-content/uploads/2021/03/Nature-Photography-Day.jpg"
          className="teacher-img-card"
          alt="nature"
        /> */}
        <Avatar
          alt="Remy Sharp"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIG1adz2cC3T6BaBzktqNU14KdRP0psfugw&usqp=CAU"
          sx={{ width: 100, height: 100, marginTop: 3 }}
        />

        <h1>{teacher.name}</h1>
        <p>{teacher.descaription}</p>
      </div>
    </div>
    // </div>
  );
}
