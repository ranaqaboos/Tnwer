export interface ITeacher {
    teacher_id:   String ;
    name : String;
    descaription :String;
    imgurl1 : String;
    // user         User          @relation(fields: [user_id], references: [user_id])
    // user_id      String
    // Feedback     Feedback[]
    // Reservation  Reservation[]
    // course       Course[]
  };
  export const teacher: ITeacher [] = [
	{
        teacher_id:"1",
        name : "ghaida",
        descaription :"i am a teacher",
        imgurl1 : "http://localhost:3001/math.png"
    },{
        teacher_id:"1",
        name : "ghaida",
        descaription :"i am a teacher",
        imgurl1 : "http://localhost:3001/math.png"
    }
]