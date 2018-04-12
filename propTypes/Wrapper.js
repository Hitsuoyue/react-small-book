import React, { Component } from 'react';
import PropTypesCom from './PropTypes';

export default class Wrapper extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){
        let content = '11111';
        return(
            <PropTypesCom content={content}/>
        )
    }
}
