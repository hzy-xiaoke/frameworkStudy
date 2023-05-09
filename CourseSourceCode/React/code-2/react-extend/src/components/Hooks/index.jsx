import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function Hooks(){

    const [count,setCount] = useState(0);
    const [name,setName] = useState('张三');

    /*
        参数1 => 函数
            模拟类组件中的componentDidMount和componentDidUpdate
            返回值模拟类组件中的componentWillUnmount
        参数2 => 数组
            指定要监测的状态
    */
    useEffect(() => {  
        let timer = setTimeout(() => {
            setCount(count => count+1);
        },1000);
        return () => {
            clearTimeout(timer);
        }
    },[])

    //加1的回调函数
    function add(){
        setCount(count+1);
    }

    //修改名字的回调函数
    function changeName(){
        setName('李四');
    }

    //卸载组件的回调函数
    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }

    return (
        <div>
            <h2>当前求和为: {count}</h2>
            <button onClick={add}>加1</button>&nbsp;
            <h2>当前名字: {name}</h2>
            <button onClick={changeName}>修改名字</button>&nbsp;
            <button onClick={unmount}>卸载组件</button>
        </div>
    )

}