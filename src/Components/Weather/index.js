import React from 'react';
import './styles.css';

class Weather extends React.Component {
    render(){
        return(
            <div className="mainResults">
                <h3>{this.props.error}</h3>
                <h3 className="results">{this.props.city} {this.props.country}</h3>
                <div style={{display:"inlineBlock"}}>
                    <h3>
                        <div className="results">{this.props.temp_min}</div>
                        <div className="results">{this.props.temp_max}</div>
                    </h3>
                </div>
                
                <h3><div className="results"> {this.props.humidity}</div></h3>
                <h3><div className="results"> {this.props.description}</div> </h3>
                <h3><div className="iconic"> {this.props.condition}</div></h3>
                
            </div>
        )
    }
}
export default Weather;