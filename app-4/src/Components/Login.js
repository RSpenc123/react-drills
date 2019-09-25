import React from 'react';

export default class Login extends React.Component {
    constructor(){
        super();
        this.state={
          userName: '',
          passWord: '',
        }
        this.handleLogin=this.handleLogin.bind(this)}
        handleChange= (val) =>{
            this.setState({userName: val})
            
        }
        handeLChange =(val) =>{
            this.setState({passWord: val})
            console.log(this.state.passWord)
        }
        handleLogin(){
            alert(`Username: ${this.state.userName} Password: ${this.state.passWord}`)
        }
    render(){
        return (
        <div>
            <input onChange={ (e) => this.handleChange(e.target.value)}></input>
            <input onChange={ (e) => this.handeLChange(e.target.value)}></input>
            <button onClick ={this.handleLogin}>Login</button>
            </div>
        )
    }
}