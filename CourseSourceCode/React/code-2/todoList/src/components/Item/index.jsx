import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import itemCss from './index.module.css'

export default class Item extends Component{

    //对传入的属性类型及必要性进行限制
    static propTypes = {
        todo: PropTypes.object.isRequired,
        reverseTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    //复选框勾选状态改变时执行的函数
    handleCheck = (id) => {
        return (event) => {
            this.props.reverseTodo(id,event.target.checked);
        }
    }

    //删除事项执行的函数
    handleDelete = (id) => {
        if(window.confirm("确认该事项删除吗?")){
            this.props.deleteTodo(id);
        }
    }

    render(){
        //接收List组件传递的属性
        const {todo} = this.props;
        return (
            <div className={itemCss.listItem}>
                <label>
                    <input type="checkbox" checked={todo.isFinish} 
                    onChange={this.handleCheck(todo.id)}/>&nbsp;
                    <span>{todo.name}</span>
                </label>
                <button className={itemCss.itemButton} 
                onClick={() => this.handleDelete(todo.id)}>删除</button>
            </div>
        )
    }

}