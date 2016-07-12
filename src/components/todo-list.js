import React from 'react';
import TodosListHeader from './todo-list-header';

export default class TodosList extends React.Component {
	renderTodoRow() {

	}
	render() {
		return (
			<table>
				<TodosListHeader />
				{
					this.props.todos.map((todo, index)=>{
						return <TodosListItem key={index} index={index} {...todo} />; //using spread operator
						// return <TodosListItem key={index} index={index} task={todo.task} isCompleted={todo.isCompleted} />;
					})
				}
			</table>
		);
	}
};


export class TodosListItem extends React.Component {
  render() {
  	console.log(this.props);
    return (
    	<tbody>
	      <tr>
	      	<td> {this.props.index + 1} </td>
	      	<td> {this.props.task} </td>
	      	<td> {this.props.isCompleted === true ? "true" : "false"} </td>
	      </tr>
    	</tbody>
    );
  }
}
