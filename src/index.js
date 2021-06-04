import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import MyComponent from './MyComponentClassApproach';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*const ParaText = 'Hello from React';
const reactElement = <p id='para1'>{ParaText}</p>
ReactDOM.render(reactElement, document.getElementById('root'));*/

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
