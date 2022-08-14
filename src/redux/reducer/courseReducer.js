import {GET_COURSES} from "../constant/courseConst"
import {course} from "../../data/data"

const startState ={
    course: course
}

export const corsReducer =(state=startState, action)=>{
    switch(action.type){
        case GET_COURSES :return {
            ...state,
            
        }
        default: return state;
    }
}