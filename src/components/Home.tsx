import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    header: {
        position: 'fixed',
        top: 50,
        zIndex: 1001
    }
});

const Home = () => {
    const classes = useStyle();
    return (
        <Container className="fillPage">
            <Typography
                variant="h1"
                component="h2"
                gutterBottom
                className={classes.header}
            >
                Hello World!
            </Typography>
        </Container>
    );
};

export default Home;
