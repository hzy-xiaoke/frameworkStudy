import React, { Component } from 'react';
import myCss from './index.module.css';

const MyContext = React.createContext();

export default class A extends Component {

    //初始化状态
    state = {
        name: '张三',
        age: 20
    }

    render() {
        const {name,age} = this.state;

        return (
            <div className={myCss.bigBox}>
                A组件 
                <br />
                名字: {name}, 年龄: {age}
                <MyContext.Provider value={this.state}>
                    <B />
                </MyContext.Provider>
            </div>
        )
    }
}

class B extends Component{
    render(){
        return (
            <div className={myCss.middleBox}>
                B组件
                <div className={myCss.flexContainer}>
                    <C />
                    <D />
                </div>
            </div>
        )
    }
}

class C extends Component{
    //声明接收context
    static contextType = MyContext;

    render(){
        const {name,age} = this.context;
        return (
            <div className={myCss.smallBox}>
                C组件
                <br />
                A组件的名字: {name}, 年龄: {age} 
            </div>
        )
    }

}

function D(){
    return (
        <div className={myCss.smallBox}>
            D组件
            <br />
            <MyContext.Consumer>
                {
                    value => {
                        return `A组件的名字: ${value.name}, 年龄: ${value.age} `
                    }
                }
            </MyContext.Consumer>
        </div>
    )
}