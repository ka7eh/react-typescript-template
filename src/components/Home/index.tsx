import React from 'react';
import { connect } from 'react-redux';
import { Container, makeStyles, Typography } from '@material-ui/core';

import { updatePageStatus, PageStatus } from '../../actions/page';

const useStyle = makeStyles({
    header: {
        position: 'fixed',
        top: 50,
        zIndex: 1001
    }
});

interface Props {
    dispatch: Function;
}

const Home = ({ dispatch }: Props) => {
    const classes = useStyle();

    React.useEffect(() => {
        setTimeout(() => {
            dispatch(updatePageStatus(PageStatus.Ready));
        }, 1000);
    }, []);
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

export default connect()(Home);
