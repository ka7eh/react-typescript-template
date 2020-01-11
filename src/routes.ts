import Home from './components/Home';

import Tests from './tests/components/Tests';

const routes: { [key: string]: import('react-router-dom').RouteProps } = {
    '/': { exact: true, component: Home }
};

if (process.env.NODE_ENV === 'development') {
    routes['/tests'] = { component: Tests };
}

export default routes;
