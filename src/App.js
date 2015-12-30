import React from 'react';

import mui, {AppBar} from 'material-ui';
import CustomTheme from './theme';

let ThemeManager = mui.Styles.ThemeManager;


export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  static get childContextTypes() {
  	return { muiTheme: React.PropTypes.object };
  }

  getChildContext() {
        return { muiTheme: ThemeManager.getMuiTheme(CustomTheme) };
  }

  render() {
    return (
    	<div>
        <AppBar title="Test" />
			  <h1>With Material UI</h1>
		  </div>
    );
  }
}
