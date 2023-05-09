import React, { Component } from 'react';
import qs from 'querystring';

// 模拟数据集
const gameData = {
    'n1': {id: 'n1', content: "内容一内容一内容一内容一内容一内容一内容一"},
    'n2': {id: 'n2', content: "内容二内容二内容二内容二内容二内容二内容二"},
    'n3': {id: 'n3', content: "内容三内容三内容三内容三内容三内容三内容三"}
};

export default class GameDetail extends Component {

    render() {
        // console.log(this.props);

        //接收params参数
        // const {id,title} = this.props.match.params;

        //接收search参数,如?name=zhangsan&age=13
        // const {search} = this.props.location;
        // const {id,title} = qs.parse(search.slice(1));

        //接收state参数
        const {state} = this.props.location || {};
        const {id,title} = state || {};

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
