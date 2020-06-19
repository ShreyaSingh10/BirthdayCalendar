import React from 'react';
import './styles.css';
import BirthdayCard from './BirthdayCard';
import InputArea from './InputArea';

//todo sorting
//handling submit on clicking once
class BirthdayContainer extends React.Component {

	state={
		yearDisplay:'',
		yearValues:'',
		mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: [],
        sun: []
	}

	handleData = (dataArr) => {
	this.setState(
      {
        yearValues: dataArr,
      }, 
      () => {
      	this.state.yearValues.map(v => {
			//console.log("coming here", v.birthday);
			var birthday = new Date(v.birthday);
			var day = birthday.getDay();
			//console.log("day", day);
			let name = v.name.split(' ');
			//console.log("NAME", name);
			let firstName = name[0][0];
			//console.log("firstName", firstName);
			let lastName = name[1][0];
			//console.log("lastname", lastName);
			name = firstName + lastName;

			//console.log("name", name);


			// if (day === 0) {
	  //           this.setState(prevstate => {
	  //           //console.log("prevstate", prevstate);
	  //             let a = prevstate.sun;
	  //             //console.log("prev state", a);
	  //             a.push({ name });
	  //             console.log("New array", a);
	  //             return {
	  //               sun: a
	  //             };
	  //           });
	  //       }

	  		this.setState(prevstate => {	
	  			if(day ===0){
	  				let a= prevstate.sun;
	  				a.push({name});
	  				return{
	  					sun:a
	  				}
	  			}
	  			if(day ===1){
	  				let a= prevstate.mon;
	  				a.push({name});
	  				return{
	  					mon:a
	  				}
	  			}
	  			if(day ===2){
	  				let a= prevstate.tue;
	  				a.push({name});
	  				return{
	  					tue:a
	  				}
	  			}
	  			if(day ===3){
	  				let a= prevstate.wed;
	  				a.push({name});
	  				return{
	  					wed:a
	  				}
	  			}
	  			if(day ===4){
	  				let a= prevstate.thu;
	  				a.push({name});
	  				return{
	  					thu:a
	  				}
	  			}
	  			if(day ===5){
	  				let a= prevstate.fri;
	  				a.push({name});
	  				return{
	  					fri:a
	  				}
	  			}
	  			if(day ===6){
	  				let a= prevstate.sat;
	  				a.push({name});
	  				return{
	  					sat:a
	  				}
	  			}

	  		});
      	});
      }) 

	}

	render() {
		console.log("STATE", this.state);
		return(
			<div>
				<h1 className="mainHeading">
          			<font face="Comic sans MS">Birthday Cal </font>
        		</h1>
        		<h3 className="message">
		          <font face="Comic sans MS">
		            Birthday's in the year {this.state.yearDisplay}
		          </font>
		        </h3>
		        <div className="cards_container">
			        <BirthdayCard data={this.state.sun} day="sun"/>
			        <BirthdayCard data={this.state.mon} day="mon"/>
			        <BirthdayCard data={this.state.tue} day="tue"/>
			        <BirthdayCard data={this.state.wed} day="wed"/>
			        <BirthdayCard data={this.state.thu} day="thu"/>
			        <BirthdayCard data={this.state.fri} day="fri"/>
			        <BirthdayCard data={this.state.sat} day="sat"/>
		        </div>
		        <InputArea getData={this.handleData}/>
			</div>
		)
	}
} 

export default BirthdayContainer;