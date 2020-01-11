import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Link, Route } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type TestRoute = import('./types').TestRoute;

type Props = RouteComponentProps & {
    routes: Array<TestRoute>;
};

const useStyles = makeStyles({
    menu: {
        position: 'fixed',
        top: 10,
        right: 10
    }
});

const Tests = (props: Props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (): void => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                color="primary"
                variant="contained"
                className={classes.menu}
                onClick={handleClick}
            >
                Test Components
            </Button>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {props.routes.map(({ path, name }) => (
                    <MenuItem key={path} onClick={handleClose}>
                        <Link to={`${props.match.url}/${path}`}>{name}</Link>
                    </MenuItem>
                ))}
            </Menu>

            {props.routes.map(({ path, component }) => (
                <Route
                    key={path}
                    path={`${props.match.path}/${path}`}
                    component={component}
                />
            ))}
        </>
    );
};

export default withRouter(Tests);
