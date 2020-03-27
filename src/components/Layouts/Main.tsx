import React from 'react';
import { connect } from 'react-redux';
import { Box, CircularProgress, makeStyles } from '@material-ui/core';

import { PageStatus } from '../../actions/page';
import { State } from '../../reducers';

import Footer from './Footer';
import Header, { HEADERS_HEIGHT } from './Header';

const useStyles = makeStyles({
    scrim: {
        position: 'absolute',
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex: 2000
    },
    main: {
        position: 'absolute',
        top: HEADERS_HEIGHT,
        width: '100%',
        height: `calc(100% - ${HEADERS_HEIGHT}px)`
    }
});

type Props = {
    pageStatus: PageStatus;
    extraMainClasses: string;
    children: React.ReactNode;
    hasFooter: boolean;
};

const Layout: React.FC<Props> = ({
    pageStatus,
    children,
    extraMainClasses,
    hasFooter
}: Props) => {
    const classes = useStyles();
    return (
        <>
            {pageStatus === PageStatus.Loading ? (
                <Box
                    className={`fillContainer ${classes.scrim}`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <CircularProgress />
                </Box>
            ) : null}
            <Header />
            <main className={`${classes.main} ${extraMainClasses}`}>
                {children}
                {hasFooter ? <Footer /> : null}
            </main>
        </>
    );
};

Layout.defaultProps = {
    extraMainClasses: '',
    hasFooter: false
};

const mapStateToProps = (state: State) => ({
    pageStatus: state.getIn(['page', 'status'])
});

export default connect(mapStateToProps)(Layout);
