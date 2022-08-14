import Course from "./Course";
import { course } from "../data/data";
import React from "react";
import { getCourses } from "../redux/action/courseAction";
import { useSelector } from "react-redux";

export function Courses() {
  const courses = useSelector((state) => state.cors.course);
  const postnew = courses.map((course) => <Course course={course} />);
  return (
    <div className="c">
      <div className="course-page">{postnew}</div>
    </div>
  );
}
