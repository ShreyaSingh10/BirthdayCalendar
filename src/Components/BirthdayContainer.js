import React from 'react';
import './styles.css';
import BirthdayCard from './BirthdayCard';
import InputArea from './InputArea';

class BirthdayContainer extends React.Component {

	state={
		yearDisplay:'',
		yearData:'',
		mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: [],
        sun: []
	}

	refresh =() => {
		this.setState({
		yearDisplay:'',
		yearData:'',
		mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: [],
        sun: []
	});
	}

	handleData = (dataArr, year) => {
		this.refresh();
		this.setState(
	      {
	        yearData: dataArr,
	        yearDisplay: year
	      }, 
	      () => {
	      	this.state.yearData.map(val => {
				var birthday = new Date(val.birthday);
				var day = birthday.getDay();
				let name = val.name.split(' ');
				let firstName = name[0][0];
				let lastName = name[1][0];
				name = firstName + lastName;
		  		this.setState(prevstate => {	
		  			if(day ===0){
		  				let arr = prevstate.sun;
		  				arr.push({name});
		  				return{
		  					sun:arr
		  				}
		  			}
		  			if(day ===1){
		  				let arr= prevstate.mon;
		  				arr.push({name});
		  				return{
		  					mon:arr
		  				}
		  			}
		  			if(day ===2){
		  				let arr= prevstate.tue;
		  				arr.push({name});
		  				return{
		  					tue:arr
		  				}
		  			}
		  			if(day ===3){
		  				let arr= prevstate.wed;
		  				arr.push({name});
		  				return{
		  					wed:arr
		  				}
		  			}
		  			if(day ===4){
		  				let arr= prevstate.thu;
		  				arr.push({name});
		  				return{
		  					thu:arr
		  				}
		  			}
		  			if(day ===5){
		  				let arr= prevstate.fri;
		  				arr.push({name});
		  				return{
		  					fri:arr
		  				}
		  			}
		  			if(day ===6){
		  				let arr= prevstate.sat;
		  				arr.push({name});
		  				return{
		  					sat:arr
		  				}
		  			}

		  		});
	      	});
	    }) 
	}

	render() {
		const {sun, mon, tue, wed, thu, fri, sat} = this.state;
		return(
			<div>
				<h1 className="main_heading">
          			<font face="Comic sans MS">Birthday Cal</font>
        		</h1>
        		<h3 className="message">
		          <font face="Comic sans MS">
		            Birthdays in the year {this.state.yearDisplay}
		          </font>
		        </h3>
		        <div className="cards_container">
			        <BirthdayCard data={sun} day="sun"/>
			        <BirthdayCard data={mon} day="mon"/>
			        <BirthdayCard data={tue} day="tue"/>
			        <BirthdayCard data={wed} day="wed"/>
			        <BirthdayCard data={thu} day="thu"/>
			        <BirthdayCard data={fri} day="fri"/>
			        <BirthdayCard data={sat} day="sat"/>
		        </div>
		        <InputArea getData={this.handleData} />
			</div>
		)
	}
} 

export default BirthdayContainer;