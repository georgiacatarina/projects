import React , { Component } from 'react';
import Login from './components/Login';
import ChatContainer from './containers/ChatContainer';

// =============
// App Component
// =============
class App extends Component {
	//acessar as props this.props.currentUser 
	render() {
		let currentUser= this.props.currentUser;
		let loading= this.props.loading;


		if(loading){
			return (<div className="loading">Loading...</div>);
		}else{
			if(currentUser) {
				return (<ChatContainer currentUser={currentUser}  />);
			}
			else {
				return (<Login />);
			}
		}
	}
}

export default App;
