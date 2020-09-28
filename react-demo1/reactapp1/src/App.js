// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react'
import FriendList from './FriendList'

class App extends Component {
	/**
	 * 类组件：
	 * 1.必须继承自React.Component
	 * 2.必须有一个render方法
	 * 3.render中定义要输出的组件
	 */
	render() {
		return (
			<div className="box">
				<h1>这是一个React</h1>
				<FriendList/>
			</div>
		)
	}
}
export default App