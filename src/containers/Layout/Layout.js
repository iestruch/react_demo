import React from 'react';

/** material ui */
import {LeftNav,List,ListItem,AppBar,Avatar} from 'material-ui';
import Colors from 'material-ui/lib/styles/colors';

import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';
const SelectableList = SelectableContainerEnhance(List);
/** react-router */
import {Link} from 'react-router';

require('./Layout.sass');

export default class Layout extends React.Component {
  
  static contextTypes = {
    router: React.PropTypes.func
  };

  constructor(props,context) {
    super(props,context);
    this.state = {
      nav: {
        open: true,
        width: this.props.width || '20em',
        items:[
          { route: '/', text: 'Home' },
          { route: 'gallery', text: 'Gallery' }
        ]
      }
    };
  }

  handleClose = () => { 
    this.setState({nav:{open:false}}) 
  }

  toggleClose = (isOpened) => {
    this.setState({nav:{open:isOpened}});    
  }

  handleUpdateSelectedIndex = (event) => {    
    let value = event.currentTarget.getAttribute('value');
    debugger;
    if (value) {
      debugger;
      this.context.router.transitionTo(value);
    }
  }
  

  render() {
    let widthNav = this.state.nav.open? this.state.nav.width : '0' ;
    let navStyle = {flex: `0 0 ${widthNav}`};
    let AvatarStyle = {marginLeft:35,border:'5px solid',borderColor:'#ffffff'};


    return (
      <div className="layout__wrapper">
        <nav className="nav" style={navStyle}>
          <LeftNav style={ {width: widthNav} }
            ref="leftNav"
            docked={false}            
            open={this.state.nav.open}
            onRequestChange={ this.toggleClose }>
              <ListItem style={{backgroundColor:Colors.pink500}}>
                <Avatar src="http://pickaface.net/avatar/Opi51c74d0125fd4.png" size={200} style={AvatarStyle}/>
              </ListItem>
              <ListItem
              primaryText="Get Started"
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key='item-1'
                  value="gallery"
                  primaryText="Prerequisites"
                  onTouchTap = { this.handleUpdateSelectedIndex }
                />
              ]}
            />
          </LeftNav>
        </nav>
      	
      	<div className="content__wrapper">
      		{this.props.children}
      	</div>
      </div>
    );
  }
}
