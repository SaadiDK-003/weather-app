import React from "react";

const Loader = (props) => {
    return (
        <div className="ui active inverted dimmer">
            <div className="ui text loader">{props.loaderText}</div>
        </div>
    );
}

Loader.defaultProps = {
   loaderText : "Loading..."
}

export default Loader;