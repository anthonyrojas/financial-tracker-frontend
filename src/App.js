import React from 'react';
import {ThemeProvider as MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Hidden from '@material-ui/core/Hidden'
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
} from 'react-router-dom'

//pages
import CategoryState from './context/Category/CategoryState';
import Navigation from './components/Navigation';
import MobileNavigation from './components/MobileNavigation';
import Content from './Content';
import ExpenseState from './context/ExpenseEntry/ExpenseState';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: blue,
    secondary: red,
    info: blueGrey,
    error: red,
    success: green
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  toolbar: theme.mixins.toolbar,
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  logoListItem: {
    background: 'linear-gradient(to top, #00c6ff, #0072ff)',
    paddingTop: '2em',
    paddingBottom: '2em'
  },
  list: {
    paddingTop: 0
  }
}))

function App() {
  const classes = useStyles();
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <CategoryState>
          <ExpenseState>
            <div className={`App ${classes.root}`}>
              <Hidden lgUp>
                <MobileNavigation />
              </Hidden>
              <Hidden mdDown>
                <Navigation logoListItem={classes.logoListItem} drawer={classes.drawer} drawerPaper={classes.drawerPaper} list={classes.list}/>
              </Hidden>
              <div className={classes.content}>
                <Hidden lgUp>
                  <div className={classes.toolbar} />
                </Hidden>
                <Content />
              </div>
            </div>
          </ExpenseState>
        </CategoryState>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
