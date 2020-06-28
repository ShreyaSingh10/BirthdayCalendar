import React from 'react';
import './styles.css';
import { validator } from './validator.js';

export default class BirthdayCard extends React.Component {

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
    const {data} = this.props;
		return(
			<div className="cards">
        <div className="header">{this.props.day}</div>
        <div className="names_background_container">
          <div className="names_container">
            {data.length > 0 ? (
              data.map((name, index) => (
                <div
                  className={`smaller_cards${validator(
                    data.length
                  )}`}
     			  style={{ backgroundColor: this.state.color[index % 7] }}
                >
                  {name.name}
                </div>
              ))
            ) : (
              <img
                className="no_birthday_image"
                src="https://cdn3.iconfinder.com/data/icons/smileys-people-smiley-essential/48/v-30-512.png"
              />
            )}
          </div>
        </div>
      </div>
		);
	}
}