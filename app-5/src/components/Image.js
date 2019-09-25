import React from 'react';

var bgColors = {"Black": "Black"}
export default class Image extends React.Component{
    render(){
    return(
        <div>
            <style>{'body { background-color: black; }'}</style>
            <img src= {this.props.myImage}></img>
            <caption style={{color: 'white'}}>Potatoes Kewl</caption>
            
        </div>
    )
}
}