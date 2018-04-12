import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <h1>Header</h1>
        )
    }
}

class Body extends Component{
    render(){
        return(
            <h1>Body</h1>
        )
    }
}

class Footer extends Component{
    render(){
        return(
            <h1>Footer</h1>
        )
    }
}

export default class Tree extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}