import React from "react";
import "./SeasonDisplay.css";

const SeasonConfig = {
    warm:{
        text: 'Its getting hot here...',
        iconName:'sun yellow'
    },
    cold:{
        text: 'It\'s getting cold here...',
        iconName: 'snowflake blue'
    }
}

const getSeason = (lat, Month) => {
    if(Month > 2 && Month < 9){
        return lat > 0 ? 'warm':'cold'
    }
    else{
        return lat > 0 ? 'cold': 'warm'
    }
}

const SeasonDisplay = (props) => {
    const Month = new Date().getMonth()+1;
    const season = getSeason(props.lat,Month);
    const {text, iconName} = SeasonConfig[season]
    return (
            <div className="flex">
                <i className={`${iconName} icon big middle left`}></i>
                    <h2 className="text header">{text}</h2>
                <i className={`${iconName} icon big middle right`}></i>
            </div>
    );
}

export default SeasonDisplay;