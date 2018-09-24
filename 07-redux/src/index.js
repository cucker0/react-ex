import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import TodoListReducer from './reducers/TodoListReducer';
import thunk from 'redux-thunk'
import CountReducer from './reducers/CountReducer'


// const reducer= (state={list:[]}, action={})=>{
// 	switch (action.type) {
// 		case "ADD_TODO":
// 			//state状态深拷贝
// 			const newState = Object.assign({}, state);
// 			newState.list.push(action.payload)
// 			return newState;
// 		default:
// 			return state;
// 	}
// }

const reducer = combineReducers({
	list: TodoListReducer,
	count: CountReducer
})

const store = createStore(reducer, {list: []}, applyMiddleware(thunk));

function renderPage(){
	ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}

renderPage();

//注册回调函数
store.subscribe(renderPage);

registerServiceWorker();

