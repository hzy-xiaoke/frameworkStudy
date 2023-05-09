import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import footer from './index.module.css'

export default class Footer extends Component{

    //对传入的属性类型进行限制
    static propTypes = {
        todoList: PropTypes.array.isRequired,
        checkAllTodo: PropTypes.func.isRequired,
        clearFinishedTodo: PropTypes.func.isRequired
    }

    //全选和全不选时执行的函数
    handleCheckAll = (event) => {
        //根据复选框状态决定是全选还是不全选
        this.props.checkAllTodo(event.target.checked);
    }

    //删除已完成事项执行的函数
    handleClearFinished = () => {
        if(window.confirm("确认删除已完成事项吗?")){
            this.props.clearFinishedTodo();
        }
    }

    render(){
        //接收父组件传递的属性
        const {todoList} = this.props;
        const finishedNum = todoList.reduce((pre,todo) => {
            return pre + (todo.isFinish? 1 : 0)
        },0);
        return (
            <div className={footer.footer}>
                <input type="checkbox" onChange={this.handleCheckAll}
                checked={finishedNum === todoList.length && todoList.length !== 0? true:false}/>
                &nbsp;
                已完成(<span>{finishedNum}</span>) / 全部(<span>{todoList.length}</span>)
                <button className={footer.delButton} onClick={this.handleClearFinished}>删除已完成事项</button>
            </div>
        )
    } 

}