import React,{ Component } from 'react';
import SetState from './components/SetState';
import LazyLoad from './components/LazyLoad';
import Hooks from './components/Hooks';
import Fragment from './components/Fragment';
import Context from './components/Context';

export default class App extends Component{

    render(){
        return (
            <div>
                <SetState />
                <hr/>
                <LazyLoad />
                <hr/>
                <Hooks />
                <hr/>
                <Fragment />
                <hr/>
                <Context />
            </div>
        )
    }

}