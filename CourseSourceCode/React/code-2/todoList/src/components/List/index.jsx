import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';

export default class List extends Component{

    //对传入的属性类型进行限制
    static propTypes = {
        todoList: PropTypes.array.isRequired,
        reverseTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    render(){
        //接收App组件传递的属性
        const {todoList,reverseTodo,deleteTodo} = this.props;
        return (
            <div>
                {
                    todoList.map(todo => {
                        return (
                            <Item key={todo.id} todo={todo} reverseTodo={reverseTodo}
                            deleteTodo={deleteTodo}/>
                        )
                    })
                }
            </div>
        )
    }

}