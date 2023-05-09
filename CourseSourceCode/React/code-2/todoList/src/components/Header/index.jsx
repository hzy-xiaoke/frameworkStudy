import React,{ Component } from 'react';
//引入用于获取唯一值的方法
import {nanoid} from 'nanoid';
import header from './index.module.css';

export default class Header extends Component{

    //按键抬起触发的函数
    handleKeyUp = (event) => {
        //获取父组件传递的属性
        const {addTodo} = this.props
        //当按下的不是回车键时
        if(event.keyCode !== 13){
            return;
        }
        //当输入的事项内容为空时
        if(event.target.value.trim() === ''){
            alert("请输入事项内容");
            return;
        }
        //构建todoObj,并传递给父组件
        addTodo({id: nanoid(), name: event.target.value, isFinish: false});
        //清空输入框内容
        event.target.value = "";
    }

    render(){
        return (
            <div className={header.header}>
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入待办事项" />
            </div>
        )
    }

}