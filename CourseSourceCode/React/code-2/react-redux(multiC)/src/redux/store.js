//引入creteStore,专门用于创建redux中最核心的store对象
import { 
    createStore,
    applyMiddleware,
} from 'redux';
//引入合并后的reducer
import allReducer from './reducers'
//引入redux-thunk,用于支持异步action
import thunk from 'redux-thunk';

//暴露store
export default createStore(allReducer,applyMiddleware(thunk));