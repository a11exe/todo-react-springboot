import React, {Component} from 'react';
// import FirstComponent from './components/learning-examples/FirstComponent'
// import SecondComponent from "./components/learning-examples/SecondComponent";
// import ThirdComponent from "./components/learning-examples/ThirdComponent";
import Counter from "./components/counter/Counter";
import './App.css';
import TodoApp from "./components/todo/TodoApp";
import './bootstrap.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <TodoApp />
                {/*<Counter />*/}
            </div>
        );
    }
}

// class LearningComponent extends Component {
//     render() {
//         return (
//             <div className="App">
//                 My hello word
//                 <FirstComponent/>
//                 <SecondComponent/>
//                 <ThirdComponent />
//             </div>
//         );
//     }
// }


export default App;
