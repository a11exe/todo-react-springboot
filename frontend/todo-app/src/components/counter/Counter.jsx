//Class component
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component{
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div className="App">
                <span className="count">{this.state.counter}</span>
                <CounterButton by={1} incrementMethod={this.increment}/>
                <CounterButton by={5} incrementMethod={this.increment}/>
                <CounterButton by={10} incrementMethod={this.increment}/>
                <CounterButton by={-1} incrementMethod={this.increment}/>
                <ResetButton resetMethod={this.reset}/>
            </div>
        );
    }

    increment(by) {
        this.setState( (prevState) =>{
            return {counter: prevState.counter + by}
        });
    }

    reset() {
        this.setState( () =>{
            return {counter: 0}
        });
    }
}

class CounterButton extends Component{

    render () {
        // const style = {fontSize: "50px", padding: "15px 30px"}
        return (
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>{this.props.by > 0 ? "+" : ""}{this.props.by}</button>
            </div>
        )
    }
}

CounterButton.defaultProps = {
    by: 1
}
CounterButton.propTypes = {
    by: PropTypes.number
}

class ResetButton extends Component{
    constructor() {
        super();
        this.reset = this.reset.bind(this);
    }
    render () {
        // const style = {fontSize: "50px", padding: "15px 30px"}
        return (
            <div className="counter">
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }

    reset() {
        this.props.resetMethod();
    }
}


export default Counter