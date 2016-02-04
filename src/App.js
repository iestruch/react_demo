import React from 'react';

/** react-router routes */
import Root from './Routes';

/** components */
import SideNav from './components/SideNav/SideNav';
import Layout from './containers/Layout/Layout';

/** material ui */
import mui, {AppBar,} from 'material-ui';
import CustomTheme from './theme';
let ThemeManager = mui.Styles.ThemeManager;
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

/** styles */
require('./App.sass');

export default class App extends React.Component {
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
        <Layout>
          {this.props.children}
        </Layout>
      </div>
    );
  }
}
