import React, { Component } from 'react'

// 模拟数据集
const gameData = {
    'g1': {id: 'g1', content: "内容一内容一内容一内容一内容一内容一内容一"},
    'g2': {id: 'g2', content: "内容二内容二内容二内容二内容二内容二内容二"},
    'g3': {id: 'g3', content: "内容三内容三内容三内容三内容三内容三内容三"}
};

export default class GameDetail extends Component {

    render() {
        // console.log(this.props);
        // 接收params参数
        const {id,title} = this.props.match.params;
        return (
            <div className="detailInfo">
                
                <h3>{title}</h3>
                <p>编号: {id}</p>
                <p className="infoContent">
                {
                    gameData[id]? gameData[id].content:
                    "暂无相关内容"
                }
                </p>
            </div>
        )
    }

}
