//引入react核心库
import React from 'react';
//引入react-dom库
import ReactDOM from 'react-dom';
//引入store
import store from './redux/store';
//引入App组件
import App from './App';

//渲染组件
ReactDOM.render(
    <App />,
    document.getElementById("root")
)

// 检测redux状态的变化
store.subscribe(() => {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    )
})

