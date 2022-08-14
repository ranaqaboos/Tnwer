import React from "react";
import { Icourse } from "../data/data";
import { addToCart } from "../redux/action/cartAction";
import { useDispatch } from "react-redux";
// interface PostProp{
//     course: Icourse
//   }

// export function Course ({course}:PostProp) {
const Course = ({ course }) => {
  const dispatch = useDispatch();
  const addCourseToCart = () => {
    console.log(course);
    dispatch(addToCart(course));
  };

  return (
    <div className="card-course">
      <img src={course.imgurl} className="img-course" alt="course" />
      <h1>{course.name}</h1>
      <p className="price">{course.price}</p>
      <p>{course.descaription}</p>
      <p>
        <button onClick={() => addCourseToCart()}>اشتراك</button>
      </p>
    </div>
  );
};

export default Course;
