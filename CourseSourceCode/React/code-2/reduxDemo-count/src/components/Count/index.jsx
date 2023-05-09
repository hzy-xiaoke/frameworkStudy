import React, { Component } from 'react';
import store from '../../redux/store';
import {
    createIncreaseAction,
    createDecreaseAction,
    createIncreaseAsyncAction
} from '../../redux/count_action';

export default class Count extends Component {

    //绑定下拉框
    selectNum = React.createRef();

    //组件挂载完毕
    // componentDidMount(){
    //     store.subscribe(() => {
    //         this.setState({});
    //     });
    // }

    //加法
    increase = () => {
        const {value} = this.selectNum.current; 
        store.dispatch(createIncreaseAction(Number(value)));
    }

    //减法
    decrease = () => {
        const {value} = this.selectNum.current; 
        store.dispatch(createDecreaseAction(Number(value)));
    }

    //奇数时进行加法
    increaseWhenOdd = () => {
        const {value} = this.selectNum.current;
        const count = store.getState();

        if(count % 2 !== 0){
            store.dispatch(createIncreaseAction(Number(value)));
        }
    }

    //异步进行加法
    increaseAsync = () => {
        const {value} = this.selectNum.current;

        // setTimeout(() => {
            store.dispatch(createIncreaseAsyncAction(Number(value),1000));
        // },2000);
    }

    render() {
        return (
            <div>
                <h2>当前求和为：{store.getState()}</h2>
                <select ref={this.selectNum}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increase}>+</button>&nbsp;&nbsp;
                <button onClick={this.decrease}>-</button>&nbsp;&nbsp;
                <button onClick={this.increaseWhenOdd}>奇数时进行+</button>&nbsp;&nbsp;
                <button onClick={this.increaseAsync}>异步进行+</button>
            </div>
        )
    }
}
