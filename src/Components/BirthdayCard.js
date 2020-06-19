import React from 'react';
import './styles.css';
import { validator } from './validator.js';

class BirthdayCard extends React.Component {

	state={
		color: [
		'gold',
		'cornsilk',
		'pink',
		'skyblue',
		'coral',
		'blue',
		'deeppink',
		'blueviolet'
		]
	}
	render(){
		//console.log("props",this.props.data.length );
		return(
			<div className="cards">
            <div className="header">{this.props.day}</div>
            <div className="names-background-container">
            
              <div className="names-Container">
                {this.props.data.length > 0 ? (
                  this.props.data.map((name, index) => (
                    <div
                      className={`smaller-cards${validator(
                        this.props.data.length
                      )}`}
         			  style={{ backgroundColor: this.state.color[index % 7] }}
                    >
                      {name.name}
                    </div>
                  ))
                ) : (
                  <img
                    className="noBirthdayImage"
                    src="https://cdn3.iconfinder.com/data/icons/smileys-people-smiley-essential/48/v-30-512.png"
                  />
                )}
              </div>
          	
            </div>
          </div>
		);
	}
}

export default BirthdayCard;