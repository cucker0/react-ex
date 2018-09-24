import { EventEmitter } from 'events'
import assign from 'object-assign'

const Store = assign({}, EventEmitter.prototype, {
	list: [],
	getTodoListData: function(){
		return this.list;
	},

	addTodoData: function (data) {
		this.list.push(data);
	},
	emitChange: function () {
		//通知触发事件
		this.emit("change");
	},
	addChangeListener: function (callback) {
		//注册事件、调用回调函数
		this.on("change", callback);
	}

})


export default Store