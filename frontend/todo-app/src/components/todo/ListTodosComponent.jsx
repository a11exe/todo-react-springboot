import React, {Component} from "react";
import AuthenticationService from "./AuthenticationService";
import TodoService from "../../api/todo/TodoService";
import moment from 'moment'

class ListTodosComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            message: null
        }
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('shouldComponentUpdate')
    //     console.log(nextProps)
    //     console.log(nextState)
    //     return true
    // }

    componentDidMount() {
        this.refreshTodos();
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUserName()
        TodoService.retrieveAllTodos(username)
            .then(
                response => {
                    //console.log(response);
                    this.setState({todos : response.data})
                }
            )
            .catch()
    }

    removeTodo(id) {
        let username = AuthenticationService.getLoggedInUserName()
        TodoService.removeTodo(username, id)
            .then(
                response => {
                    this.setState({message : `deleted todo id=${id}`})
                    this.refreshTodos();
                }
            )
            .catch()
    }

    updateTodo(id) {
        this.props.history.push(`/todos/${id}`);
    }

    addTodo() {
        console.log("!!! Add todo !!!")
        this.props.history.push(`/todos/-1`);
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    {this.state.message != null && <div className="alert alert-success">{this.state.message}</div>}
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>IsCompleted?</th>
                            <th>Update</th>
                            <th>Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map (
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                        <td><button className="btn btn-success" onClick={() => this.updateTodo(todo.id)}>update</button></td>
                                        <td><button className="btn btn-danger" onClick={() => this.removeTodo(todo.id)}>delete</button></td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={() => this.addTodo()}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent