import React, { Component } from 'react';

export default class PropTypes extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){
        return(
            <div style={{border: '1px solid #ccc'}}>
                {this.props.children}
            </div>
        )
    }
}
