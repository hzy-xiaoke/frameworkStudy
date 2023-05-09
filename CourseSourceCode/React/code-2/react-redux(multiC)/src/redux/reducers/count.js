/*
    对数据进行相应处理的模块
*/

//引入常量模块
import {INCREASE,DECREASE} from '../constant';

const initState = 0; //初始化状态

export default function countReducer(preState = initState,action){
    //获取action的type和data属性值
    //默认type为以@@开头的字符串,data为undefined
    const {type,data} = action;

    // console.log(preState,action);

    switch(type){
        case INCREASE:   //当操作类型为加法时
            return preState + data;
        case DECREASE:   //当操作类型为减法时
            return preState - data;
        default:    //第一次状态初始化
            return preState;  
    }
}
