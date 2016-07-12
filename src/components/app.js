import React from 'react';
import TodosList from './todo-list';

const todos = [
	{
		task : 'learn react',
		isCompleted: false
	},
	{
		task : 'dinner',
		isCompleted: true
	}
]

export default class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			todos
		};
	}
	render() {
		return (
			<div>
				<h1>React Todos App</h1>
				<TodosList todos={this.state.todos}/>
			</div>
		);
	}
}