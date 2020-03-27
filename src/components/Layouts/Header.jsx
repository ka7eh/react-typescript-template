import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
    AppBar,
    Avatar,
    Toolbar,
    Typography,
    makeStyles
} from '@material-ui/core';

import LogoApp from '../../images/logo_app.png';

export const HEADERS_HEIGHT = 61;

const useStyles = makeStyles((theme) => {
    return {
        mainHeader: {
            'background': theme.palette.primary.main,
            'color': theme.palette.primary.contrastText,
            'textDecoration': 'none',
            'height': HEADERS_HEIGHT,
            'minHeight': HEADERS_HEIGHT,
            '& a': {
                margin: 5
            }
        },
        headerText: {
            color: theme.palette.primary.contrastText,
            textDecoration: 'none'
        },
        navBar: {
            flexGrow: 1
        },
        marginLeftAuto: {
            marginLeft: 'auto !important'
        },
        dropdown: {
            zIndex: 10
        },
        dropdownIcon: {
            display: 'flex'
        }
    };
});

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="fixed">
            <Toolbar className={classes.mainHeader}>
                <Avatar component={Link} to="/" src={LogoApp} />
                <Typography
                    component={Link}
                    to="/"
                    className={classes.headerText}
                    variant="h6"
                    noWrap
                >
                    React/Typescript Template
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default withRouter(Header);
