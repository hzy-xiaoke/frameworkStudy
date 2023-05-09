import React, { Component } from 'react'

export default class SetState extends Component {

    //初始化状态
    state = { 
        num: 0
    }

    add = () => {
        // 对象式的setState
        /*//获取原来的值
        const {num} = this.state;
        //更新状态
        this.setState({
            num: num + 1
        },() => {
            console.log('当前值 => ',this.state.num);
        });*/

        //函数式的setState
        this.setState((state,props) => {
            // console.log(state,props);
            return {
                num: state.num + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h2>当前求和为: {this.state.num}</h2>
                <button onClick={this.add}>加1</button>
            </div>
        )
    }
}
