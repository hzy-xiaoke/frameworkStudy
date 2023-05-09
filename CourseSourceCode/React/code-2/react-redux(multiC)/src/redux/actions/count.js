/*
    专门为Count组件生成的action对象的模块
*/

//引入常量模块
import {INCREASE,DECREASE} from '../constant';

export const createIncreaseAction = (data) => {
    return {type: INCREASE, data: data};
}

export const createDecreaseAction = (data) => {
    return {type: DECREASE, data: data};
}

export const createIncreaseAsyncAction = (data,time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncreaseAction(data));
        },time);
    }
}