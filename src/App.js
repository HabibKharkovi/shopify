import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Container } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import InfoIcon from '@material-ui/icons/Info';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  mainWrapper: {
    maxWidth: 1280,
    paddingLeft: 32,
    paddingRight: 32,
    marginLeft: "auto",
    marginRight: "auto",
    boxSizing: 'border-box',
    paddingTop: 40
  },
  checkedLabel: {
    marginRight: 0,
    width: '100%',
    boxSizing: 'border-box'
  },
  leftSideBar: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 25,
    paddingRight: 25,
  },
  paper: {
    minHeight: 250,
  },
  sidebarLabel: {
    paddingLeft: 0,
    paddingRight: 0
  }
}));


export default function App() {
  const [state, setState] = React.useState({
    checked1: true,
    checked2: false,
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
    checkedH: false,
    checkedI: false,
    checkedJ: false,
    checkedK: false,
    checkedL: false,
    checkedM: false,
    checkedN: false,
  });
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <React.Fragment>
    <div className={classes.grow}>
      <AppBar position="static">
      <Container maxWidth='lg'>
        <Toolbar style={{padding: 0}}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            SHOPIFY
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
    <Box component="div">
      <Box component="div" className={classes.mainWrapper} >
        <Grid container spacing={3}>
              <Grid item xs={3}>
                <Paper className={classes.leftSideBar}>
                  <ListSubheader className={classes.sidebarLabel}>December</ListSubheader>
                  <Divider className={classes.divider} />
                  <FormControlLabel
                    control={
                      <Checkbox checked={state.checked1} onChange={handleChange('checked1')} color="primary" value="checked1" />
                    }
                    label="Secondary"
                    className={classes.checkedLabel}
                  />
                    <FormControlLabel
                    control={
                      <Checkbox checked={state.checked2} onChange={handleChange('checked2')} color="primary" value="checked2" />
                    }
                    label="Secondary"
                    className={classes.checkedLabel}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} color="primary" value="checkedA" />
                    }
                    label="Secondary"
                    className={classes.checkedLabel}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={state.checkedB} onChange={handleChange('checkedB')} color="primary" value="checkedB" />
                    }
                    label="Secondary"
                    className={classes.checkedLabel}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={state.checkedC} onChange={handleChange('checkedC')} color="primary" value="checkedC" />
                    }
                    label="Secondary"
                    className={classes.checkedLabel}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={state.checkedD} onChange={handleChange('checkedD')} color="primary" value="checkedD" />
                    }
                    label="Secondary"
                    className={classes.checkedLabel}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={state.checkedE} onChange={handleChange('checkedE')} color="primary" value="checkedE" />
                    }
                    label="Secondary"
                    className={classes.checkedLabel}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={state.checkedF} onChange={handleChange('checkedF')} color="primary" value="checkedF" />
                    }
                    label="Secondary"
                    className={classes.checkedLabel}
                  />
                  <ListSubheader className={classes.sidebarLabel}>December</ListSubheader>
                  <Divider className={classes.divider} />
                  <FormControlLabel
                    control={
                      <Checkbox checked={state.checkedG} onChange={handleChange('checkedG')} color="primary" value="checkedG" />
                    }
                    label="Secondary"
                    className={classes.checkedLabel}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={state.checkedH} onChange={handleChange('checkedH')} color="primary" value="checkedH" />
                    }
                    label="Secondary"
                    className={classes.checkedLabel}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={state.checkedI} onChange={handleChange('checkedI')} color="primary" value="checkedI" />
                    }
                    label="Secondary"
                    className={classes.checkedLabel}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={state.checkedJ} onChange={handleChange('checkedJ')} color="primary" value="checkedJ" />
                    }
                    label="Secondary"
                    className={classes.checkedLabel}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={state.checkedK} onChange={handleChange('checkedK')} color="primary" value="checkedK" />
                    }
                    label="Secondary"
                    className={classes.checkedLabel}
                  />
                </Paper>
              </Grid>
              <Grid item xs={9}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}></Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}></Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}></Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}></Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}></Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}></Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}></Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}></Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}></Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}></Paper>
                  </Grid>
                </Grid>
              </Grid>
        </Grid>
      </Box>
    </Box>
    </React.Fragment>
  );
}