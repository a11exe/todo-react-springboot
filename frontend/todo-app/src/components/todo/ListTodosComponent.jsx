import React, {Component} from "react";

class ListTodosComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos:
                [
                    {id: 1, description: 'Learn React', done: false, targetDate: new Date()},
                    {id: 2, description: 'Learn React2', done: true, targetDate: new Date()},
                    {id: 3, description: 'Learn React3', done: false, targetDate: new Date()}
                ]
        }
    }

    render() {
        return (
            <div className="container">
                <h2>List Todos</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>description</th>
                        <th>done</th>
                        <th>target date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.todos.map(
                            todo =>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListTodosComponent