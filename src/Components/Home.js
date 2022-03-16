import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class Home extends React.Component{
    state = {lat: null, errMsg: ''}

    componentDidMount(){
       window.navigator.geolocation.getCurrentPosition(
           (position) => this.setState({lat:position.coords.latitude}),
           (err) => this.setState({errMsg:err.message})
       )
    }
    
    renderComponent(){
         if(this.state.errMsg && !this.state.lat){
             return <>
                Error: {this.state.errMsg}
             </>
         }
         if(this.state.lat && !this.state.errMsg){
             return <SeasonDisplay lat={this.state.lat}/>
         }
         return <>
             <Loader loaderText="Please allow us to read your location."/>
             <p></p>
             <p></p>
             <p></p>
             </>
    }

    render(){
        return (
            <div className="ui segment mt-30-auto mx-5">
                {this.renderComponent()}
            </div>
        );
    }
}

export default Home;