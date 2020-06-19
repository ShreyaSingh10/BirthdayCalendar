import React from 'react';
import './styles.css';

class InputArea extends React.Component {
	state={
		year:'',
		error:'',
		data:[]
	}

	handleChange= (e) => {
		this.setState({
	      	year: e.target.value,
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
		let arr = this.state.data.filter(val => {
      		return val.year === this.state.year;
    	});
    	  this.props.getData(arr, this.state.year); 
    	  this.setState({year:''});
 		};


	render() {
		return(
			<form className="data_form" onSubmit={this.handleSubmit}>
	          <div className="data_input">
	            <h3 className="warning_message">
	              {' '}
	              <font face="Comic sans MS">{this.state.error}</font>
	            </h3>
	            <textarea
	              className="data_textarea"
	              name="data"
	              required
	              onChange={this.handleData}
	              placeholder="Enter JSON data"
	            />
	          </div>
	          <div className="year_input">
	            <input
	              className="year_value"
	              type="text"
	              name="year"
	              placeholder="Enter a year"
	              value={this.state.year}
	              onChange={this.handleChange}
	            />
	            <button className="submit_button">UPDATE</button>
          </div>
        </form>
		);
	}
}
export default InputArea;