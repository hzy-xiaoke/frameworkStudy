//引入react核心库
import React from 'react';
//引入react-dom库
import ReactDOM from 'react-dom';
//引入react-router-dom库
import { BrowserRouter } from 'react-router-dom';
//引入App组件
import App from './App'

//渲染组件
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
)