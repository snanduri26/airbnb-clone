import React from 'react';

class Hello extends React.Component{
    render(){
        return <div>    
                    <h1>Welcome to page {this.props.name} and your age is {this.props.age} </h1>
                    
                </div>;
    }
}

export default Hello;