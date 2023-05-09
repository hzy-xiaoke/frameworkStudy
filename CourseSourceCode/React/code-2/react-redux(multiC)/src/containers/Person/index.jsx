import React, { Component } from 'react';
import {nanoid} from 'nanoid';
import { connect } from 'react-redux';
import {
    createAddPersonAction
} from '../../redux/actions/person'

class Person extends Component {

    //引用两个输入框对象
    nameNode = React.createRef();
    ageNode = React.createRef();

    //添加
    handleAddPerson = () => {
        const name = this.nameNode.current.value;
        const age = this.ageNode.current.value;
        const personObj = { id: nanoid(), name, age: Number(age)};

        this.props.addPerson(personObj);
    }

    render() {
        const {count,personList} = this.props;

        return (
            <div>
                <h2>我的Person组件,上方求和为{count}</h2>
                <input ref={this.nameNode} type="text" placeholder="请输入姓名" />&nbsp;
                <input ref={this.ageNode} type="number" placeholder="请输入年龄" />&nbsp;
                <button onClick={this.handleAddPerson}>添加</button>
                <ul>
                    {
                        personList.map(person => {
                            return (
                                <li key={person.id}>
                                    {person.name}--{person.age}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    //映射状态
    state => {
        return {
            count: state.count,
            personList: state.personList
        }
    },
    //映射状态操作方法
    {
        addPerson: createAddPersonAction
    }
)(Person)