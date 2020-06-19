import React from 'react';
import './styles.css';

class InputArea extends React.Component {
	state={
		year:'',
		error:'',
		yearDisplay:'',
	}

	handleChange= (e) => {
		this.setState({
	      	year: e.target.value,
	      	yearDisplay: e.target.value
    	});
	}

	handleData = e =>{
		const { value } = e.target;
	    try {
	      JSON.parse(value);
	    } catch (e) {
	      return this.setState({ error: 'Enter JSON only' });
	    }
	    return this.setState({
	      data: JSON.parse(value),
	      error: ''
	    });
	}

	handleSubmit= (e) => {
		e.preventDefault();
		//console.log("STATE", this.state);
		let arr = this.state.data.filter(val => {
      		return val.year === this.state.year;
    	});
    	//console.log("ARR", arr);
    	//code hereeee----------
	      this.props.getData(arr);   	
 		};


	render() {
		return(
			<form className="data_form" onSubmit={this.handleSubmit}>
	          <div className="data-input">
	            <h3 className="warningMessage">
	              {' '}
	              <font face="Comic sans MS">{this.state.error}</font>
	            </h3>
	            <textarea
	              className="data-textarea"
	              name="data"
	              required
	              onChange={this.handleData}
	              placeholder="Enter JSON data"
	            />
	          </div>
	          <div className="year-input">
	            <input
	              className="year-value"
	              type="text"
	              name="year"
	              placeholder="Enter a year"
	              value={this.state.year}
	              onChange={this.handleChange}
	            />
	            <button className="submitButton">UPDATE</button>
          </div>
        </form>
		);
	}
}
export default InputArea;