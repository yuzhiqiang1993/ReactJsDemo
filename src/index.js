import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import TodoList from "./TodoList";

ReactDOM.render(<TodoList/>, document.getElementById('root'));

serviceWorker.unregister();
