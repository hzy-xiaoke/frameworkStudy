import React, { Component } from 'react';
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux';
//引入相关的action
import { 
    createIncreaseAction,
    createDecreaseAction,
    createIncreaseAsyncAction
 } from '../../redux/actions/count';

//定义UI组件
class Count extends Component {

    //绑定下拉框
    selectNum = React.createRef();

    //加法
    increase = () => {
        const {value} = this.selectNum.current; 
        this.props.handleIncrease(Number(value));
    }

    //减法
    decrease = () => {
        const {value} = this.selectNum.current; 
        this.props.handleDecrease(Number(value));
    }

    //奇数时进行加法
    increaseWhenOdd = () => {
        const {value} = this.selectNum.current;
        const {count} = this.props;

        if(count % 2 !== 0){
            this.props.handleIncrease(Number(value));
        }
    }

    //异步进行加法
    increaseAsync = () => {
        const {value} = this.selectNum.current;
        this.props.handleAsyncIncrease(Number(value),500);
    }

    render() {
        const {count,personNum} = this.props;
        return (
            <div>
                <h2>我的Count组件,下方总人数为{personNum}</h2>
                <h2>当前求和为：{count}</h2>
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
 
//状态
const mapStateToProps = (state) => {
    return {
        count: state.count,
        personNum: state.personList.length
    }
}

//操作状态的方法
const mapDispatchProps = (dispatch) => {
    return {
        handleIncrease: (number) => {
            dispatch(createIncreaseAction(number));
        },
        handleDecrease: (number) => {
            dispatch(createDecreaseAction(number));
        },
        handleAsyncIncrease: (number,time) => {
            dispatch(createIncreaseAsyncAction(number,time));
        }
    }
}
//操作状态的方法(简写方式)
// const mapDispatchProps = {
//     handleIncrease: createIncreaseAction,
//     handleDecrease: createDecreaseAction,
//     handleAsyncIncrease: createIncreaseAsyncAction
// }

//使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchProps)(Count);