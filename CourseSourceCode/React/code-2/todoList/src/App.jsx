import React,{ Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css'

export default class App extends Component{

    //状态信息
    state = {
        todoList: [
            {id: "0001", name: "吃饭", isFinish: true},
            {id: "0002", name: "睡觉", isFinish: true},
            {id: "0003", name: "看书", isFinish: false},
            {id: "0004", name: "打代码", isFinish: true},
        ]
    }

    //添加事项
    addTodo = (todoObj) => {
        //将子组件触发函数传递的数据添加到状态中
        const {todoList} = this.state;
        const newTodoList = [todoObj,...todoList];
        this.setState({
            todoList: newTodoList,
        });
    }

    //反选事项完成状态
    reverseTodo = (todoId,flag) => {
        const {todoList} = this.state;
        //遍历todoList,找到目标todo,将其状态进行修改
        const newTodoList = todoList.map(todoObj => {
            if(todoObj.id === todoId){
                return {...todoObj,isFinish: flag};
            }else{
                return todoObj;
            }
        });
        this.setState({
            todoList: newTodoList
        });
    }

    //删除事项
    deleteTodo = (todoId) => {
        const {todoList} = this.state;
        //遍历todoList过滤出id不等于目标id的事项
        const newTodoList = todoList.filter(todoObj => {
            return todoObj.id !== todoId;
        });
        this.setState({
            todoList: newTodoList
        });
    }

    //删除已完成事项
    clearFinishedTodo = () => {
        const {todoList} = this.state;
        //遍历todoList过滤出未完成的事项
        const newTodoList = todoList.filter(todoObj => {
            return todoObj.isFinish === false
        });
        this.setState({
            todoList: newTodoList
        })
    }

    //全选或全不选事项
    checkAllTodo = (flag) => {
        const {todoList} = this.state;
        //根据flag,决定是全选还是选不选
        const newTodoList = todoList.map(todoObj => {
            return {...todoObj,isFinish: flag}
        });
        this.setState({
            todoList: newTodoList
        });
    }

    render(){
        return (
            <div>
                <Header addTodo={this.addTodo} />
                <List todoList={this.state.todoList} reverseTodo={this.reverseTodo}
                deleteTodo={this.deleteTodo}/>
                <Footer todoList={this.state.todoList} checkAllTodo={this.checkAllTodo}
                clearFinishedTodo={this.clearFinishedTodo}/>
            </div>
        )
    }

}