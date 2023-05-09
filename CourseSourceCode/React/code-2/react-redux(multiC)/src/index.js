//引入react核心库
import React from 'react';
//引入react-dom库
import ReactDOM from 'react-dom';
//引入store
import store from './redux/store';
//引入Provider
import {Provider} from 'react-redux';
//引入App组件
import App from './App';

//渲染组件
ReactDOM.render(
    // 让App所有的后代容器组件都能接收到store
    <Provider store={store}>
         <App />
    </Provider>,
    document.getElementById("root")
)


