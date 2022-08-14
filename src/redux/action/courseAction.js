import {GET_COURSES} from "../constant/courseConst"


export const getCourses =()=>dispatch=>{
    dispatch({type:GET_COURSES})
}