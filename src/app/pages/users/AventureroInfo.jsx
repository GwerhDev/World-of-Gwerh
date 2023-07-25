import React, { Component } from 'react';
class AventureroInfo extends Component {
    render(){
        console.log(this.props.params.id)
        return (
            <div>
                <h3>name</h3>
                <p>id</p>
            
            </div>
            
        )
    }
}

export default AventureroInfo