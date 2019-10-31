import React from 'react';
import './styles.css';

class InputForm extends React.Component {
    render(){
        return(
            <div className="weatherForm">
                <form onSubmit={this.props.loadWeather}>
                    <h5>Enter a country</h5>
                    <input
                        className="inputBar"
                        type="text"
                        name="country"
                        required
                    />
                    <br /><br />
                    <h5>Enter the city from that country</h5>
                    <input
                        className="inputBar"
                        type="text"
                        name="city"
                        required
                    />
                    <br /><br />
                    <button className="confirm">Confirm</button>
                </form>
            </div>
        );
    }
}
export default InputForm;