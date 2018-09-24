import { Dispatcher } from 'flux'
//引入store
import Store from '../stores/TodoStore'

const TodoDispatcher = new Dispatcher();
TodoDispatcher.register(function (action) {
	switch (action.actionType) {
		case 'ADD_TODO':
			Store.addTodoData(action.payload);
			Store.emitChange();
			break;
		default:
			//其他处理
	}
})

export default TodoDispatcher