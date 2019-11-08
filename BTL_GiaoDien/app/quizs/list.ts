export interface listsubjects{
    Id:String;
    Name:String;
    Logo:String;
}
export class quizs{
    Id:number;
    Text:String;
    Marks: number;
    AnswerId: number;   
    Answers:  [
        { Id: number, Text: String }
    ]
}