import React from 'react';
import {LeftNav} from 'material-ui';

export default class SideNav extends React.Component {
  static propTypes = {
    opened: React.PropTypes.bool
  };

  constructor(props) {
    super(props);
	  this.state = {
      _opened: true
    }

    this._toggleNav = this._toggleNav.bind(this);
  }

  _toggleNav() {
  	this.setState({_opened: !this.state._opened});
  }

  render() {
    return (
      <LeftNav 
      	docked = { false }
      	open = { this.state._opened }>

      	<button onClick={ this._toggleNav }> Toggle </button>

      </LeftNav>
    );
  }
}
