import React, { Component } from 'react';

export default class Container extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){
        console.log(this.props.children);
        return(
            <div style={{border: '1px solid #ccc'}}>
                {this.props.children}
            </div>
        )
    }
}
