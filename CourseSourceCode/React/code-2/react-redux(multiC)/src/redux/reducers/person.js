import { ADD_Person } from "../constant";

//初始化状态
const initState = [{id: '01', name: 'zhangsan', age: 20}];

export default function personReducer(preState = initState,action){
    const {type,data} = action;

    // console.log(preState);

    switch(type){
        case ADD_Person:
            return [data,...preState];
        default: 
            return preState;
    }

}

