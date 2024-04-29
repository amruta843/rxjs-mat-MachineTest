
export interface ICoursesRes{
    payload:Icourse[]


}
export interface Icourse{
    id:number;
    description:string;
    iconUrl:string;
    courseListicon:string;
    longDescription:string;
    category:string;
    lessonsCount:number;
    releasedAt?:Date;
}

export interface IlessonsRes{
    payload:Ilessons[]}

export interface Ilessons {
    id: number;
    description: string;
    duration: string;
    seqNo: number;
    courseId: number;
}