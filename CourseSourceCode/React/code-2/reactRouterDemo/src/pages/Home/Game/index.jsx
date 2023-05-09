import React,{ Component } from 'react';
import {Link,Route} from 'react-router-dom';
import GameDetail from './GameDetail';

export default class Game extends Component{

    //状态初始化
    state = {
        gameDetails: [
            {id: 'g1',title: "游戏资讯1"},
            {id: 'g2',title: "游戏资讯2"},
            {id: 'g3',title: "游戏资讯3"},
        ]
    }

    render(){
        const {gameDetails} = this.state;
        return (
            <div className="info">
                <ul>
                    {
                        gameDetails.map(detail => {
                            return (
                                <li key={detail.id}>
                                    {/* params方式传参 */}
                                    <Link to={`/home/game/detail/${detail.id}/${detail.title}`}>
                                        {detail.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 注册路由 */}
                <Route path="/home/game/detail/:id/:title" component={ GameDetail } />
            </div>
        )
    }

}