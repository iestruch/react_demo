import React from 'react';

import Widget from '../../components/Widget/Widget'

require('./Gallery.sass');

export default class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	collection:[{
    		label:'Texto 1'
    	},{
    		label:'Texto 2'
    	},{
    		label:'Texto 3'
    	},{
    		label:'Texto 4'
    	},{
    		label:'Texto 5'
    	},{
    		label:'Texto 6'
    	},{
    		label:'Texto 7'
    	},{
    		label:'Texto 8'
    	},]
    }
  }

  render() {
    return (
    	<div className="flex-container">
			<Widget {...this.props}>
				<p>Lorem ipsum Aute ad ex nostrud sunt in in tempor et sint anim enim sit nisi commodo labore magna tempor velit commodo exercitation veniam qui sint elit irure eu.</p>
			</Widget>		    
	    </div>
    );
  }
}
