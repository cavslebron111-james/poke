import React from 'react'

const Rainbow = (WrappedComponent) => {
    
    const Colours = ['red','blue','orange','green','yellow','gray','skyblue'];
    const Randomcolours = Colours[Math.floor(Math.random() * 6)];
    const className = Randomcolours + '-text';
    return(props) => {
    
    return(
        <div className = {className}>
        <WrappedComponent {...props} />
       </div>
    )
}
}

export default Rainbow