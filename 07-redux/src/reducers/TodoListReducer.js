const TodoListReducer= (state=[], action={})=>{
	switch (action.type) {
		case "ADD_TODO":
			//state状态深拷贝
			const newState = [...state];
			newState.push(action.payload);
			return newState;
		default:
			return state;
	}
}

export default TodoListReducer