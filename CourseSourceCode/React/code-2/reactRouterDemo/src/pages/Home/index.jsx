import React,{ Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import News from './News';
import Game from './Game';
import MyNavLink from '../../components/MyNavLink';
import './index.css';


export default class Home extends Component{

    render(){
        return (
            <div className="homepage">
                <ul>
                    <li>
                       <MyNavLink to="/home/news">新闻</MyNavLink>
                    </li>
                    <li>
                       <MyNavLink to="/home/game">游戏</MyNavLink>
                    </li>
                </ul>
                {/* 注册路由 */}
                <Switch>
                    <Route path="/home/news" component={ News }/>
                    <Route path="/home/game" component={ Game }/>
                    <Redirect to="/home/news" />
                </Switch>
            </div>
        )
    }
    
}