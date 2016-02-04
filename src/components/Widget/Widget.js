import React from 'react';
import {Card,CardHeader,CardText,CardActions,FlatButton} from 'material-ui';

const Widget = (props) => (
	<Card className="flex-container-item w-30" initiallyExpanded={true}>
	    <CardHeader
		    title="Without Avatar"
		    subtitle="Subtitle"
		    actAsExpander={true}
		    showExpandableButton={true} />
	    <CardText expandable={true}>
		    {props.children}
	    </CardText>    
	</Card>
)

export default Widget;