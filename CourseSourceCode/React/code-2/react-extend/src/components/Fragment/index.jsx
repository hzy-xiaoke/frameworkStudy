import React, { Component,Fragment } from 'react'

export default class FragmentDemo extends Component {
    render() {
        return (
            <Fragment>
                Fragment <br />
                <input type="text" />
                <input type="text" />
            </Fragment>
        )
    }
}
