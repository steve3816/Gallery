import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {name, age, SteveComponent} from './steve';
import StudentList from './StudentList/StudentList';
import StudentListClassed from './StudentListClassed/StudentListClassed';

function createContent(){
    return <div>123</div>;
}

// render 字串
// ReactDOM.render('<button>按我</button>', document.getElementById('root'));

// render一個React element
// ReactDOM.render(React.createElement('button', {style:{color:'red'}}, '按我')
// , document.getElementById('root')
// );


// render JSX 1
// ReactDOM.render(<div><button>按我</button></div>, document.getElementById('root') );
// ReactDOM.render(<SteveComponent></SteveComponent>, document.getElementById('root'))

// render function  好像沒有這回事?

// ReactDOM.render(createContent()
// , document.getElementById('root')
// );


// render react component
// ReactDOM.render(React.createElement(SteveComponent), document.getElementById('root'));

// render function as JSX
// ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<StudentList/>,  document.getElementById('root'));
// ReactDOM.render(<StudentListClassed/>,  document.getElementById('root'));