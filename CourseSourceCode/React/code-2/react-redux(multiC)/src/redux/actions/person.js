import { ADD_Person } from "../constant";

//创建新增一个Person的动作对象
export const createAddPersonAction = (personObj) => {
    return {
        type: ADD_Person,
        data: personObj
    }
}