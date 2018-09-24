const CounttReducer= (state=0, action={})=>{
	switch (action.type) {
		case "ADD_ONE":
			return state + action.payload;
		case "MINUS_ONE":
			return state - action.payload;
		default:
			return state;
	}
}

export default CounttReducer