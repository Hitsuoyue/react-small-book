import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux'

import ThumbsUp from './thumbs-up/ThumbsUp.jsx';
import UI from './ui/UI.jsx';
import Tree from './tree/Tree.jsx';
import List from './list/List.jsx';
import CommentWrap from './comment/CommentWrap.jsx';
import Ref from './ref/Ref';
import Wrapper from './container/Wrapper';
import { default as PropWrap}  from './propTypes/Wrapper';
import store from "./reducer/reducer";





class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLiked: false
        }
    }

    onStatusChange = (isLiked) => {
        this.setState({
            isLiked: !isLiked
        })
    }

    render() {
        console.log('store', this.props, store);
        // console.log('0', store.getState());
        // store.dispatch({ type: 'INCREMENT' });
        // console.log('1', store.getState());
        // store.dispatch({ type: 'INCREMENT' });
        // console.log('2', store.getState());
        // store.dispatch({ type: 'DECREMENT' });
        // console.log('1', store.getState());
        return (
            <Provider store={store}>
                <CommentWrap/>
            </Provider>
        )
    }
}


ReactDOM.render(<App/>, document.querySelector('#app'))

