//引入creteStore,专门用于创建redux中最核心的store对象
import { combineReducers } from 'redux';
//引入为Count组件服务的reducer
import countReducer from './count';
//引入为Person组件服务的reducer
import personReducer from './person';

//汇总所有的reducer
export default combineReducers({
    count: countReducer,
    personList: personReducer
});
