import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
    return {
        footer: {
            'background': theme.palette.primary.lighter,
            'color': theme.palette.primary.contrastText,
            'textDecoration': 'none',
            'textAlign': 'center',
            'padding': 10,
            '& a': {
                margin: 15
            }
        },
        content: {
            color: 'gray',
            width: '75%',
            margin: '10px auto 5px',
            lineHeight: 1.5
        }
    };
});

const Footer = () => {
    const classes = useStyles();

    return <footer className={classes.footer}>Enjoy!</footer>;
};

export default Footer;
