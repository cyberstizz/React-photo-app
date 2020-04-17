import React from 'react';
import '../App.css';

export default class Login extends React.Component{
    constructor(props){
    super(props)
    }

    render(){
        return(
            <div id="splash">
                <form id="inForm" type="submit">
                    <input type="text" placeholder="username"></input>
                    <input type="text" placeholder="password"></input>
                    <input type="submit" value="submit"></input>

                </form>
            </div>
        )
    }
}