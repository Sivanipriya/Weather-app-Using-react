import React from 'react';

class Apple extends React.Component{
    render(){
        const {appInfo} = this.props;
        const {type,val}=appInfo;
        return(
            <>
            <h1>Hello</h1>;
            <h1>{type}</h1>;
            </>
        );
    }
}

export default Apple;