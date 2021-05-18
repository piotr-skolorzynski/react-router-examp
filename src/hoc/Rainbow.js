import React from 'react';

const Rainbow = WrappedComponent => {
    const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColor = colors[Math.floor(Math.random() * 5)]; //choose random color
    // in materialize css classes to change text color are creates as a pattern color-text 
    const className = `${randomColor}-text`;

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow;
