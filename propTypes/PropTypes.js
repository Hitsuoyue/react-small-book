import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PropTypesCom extends Component{

    static propTypes = {
        content: PropTypes.object
    }

    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){
        return(
            <div style={{border: '1px solid #ccc'}}>
                {this.props.content.user}
            </div>
        )
    }
}
