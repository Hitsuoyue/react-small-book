import React, { Component } from 'react';

export default class Ref extends Component{
    constructor(props){
        super(props);
        this.state={
            ss: ''
        }
    }

    onInputFocus = (e) => {
        console.log(e);
        this.setState({
            ss: e
        })
    }

    render(){
        console.log('this.input', this.input);
        return(
            <input type="text" autoFocus={true}  ref={(input) => this.input = input} onFocus={this.onInputFocus}/>
        )
    }
}

