import React from 'react';
import './styles.css';

export default class InputArea extends React.Component {
	state={
		year:'',
		error:'',
		data:[]
	}

	handleInputChange= (e) => {
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

	handlesort = (arr) => {
		let compare = (a,b) =>{
			let d1, d2, m1, m2, y1, y2;
		    [d1,m1,y1] = a.birthday.split('/');
		    [d2,m2,y2] = b.birthday.split('/');
		    if(y1<y2){
		        return 1;
		    }else if(y1 == y2){
		        if(m1<m2) return 1;
		        else if(m1 == m2){
		            if(d1 <=  d2){
		                return 1;
		            }
		        }
		    }
		    return -1;
		}
		arr.sort(compare);
		this.setState({data: arr});
	}

	handleSubmit= (e) => {
		e.preventDefault();
  		this.handlesort(this.state.data);
    	this.props.getData(this.state.data, this.state.year); 
    	this.setState({year:''});
 	};


	render() {
		const {year, error} = this.state;
		return(
			<form className="data_form" onSubmit={this.handleSubmit}>
	          <div className="data_input">
	            <h3 className="warning_message">
	              <font face="Comic sans MS">{error}</font>
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
	              value={year}
	              onChange={this.handleInputChange}
	            />
	            <button className="submit_button">UPDATE</button>
          </div>
        </form>
		);
	}
}