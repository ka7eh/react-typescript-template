import { withLayout } from './components/Layouts/utils';
import MainLayout from './components/Layouts/Main';
import Home from './components/Home';

import Tests from './tests/components/Tests';

const routes: { [key: string]: import('react-router-dom').RouteProps } = {
    '/': { exact: true, component: withLayout(MainLayout, Home) }
};

if (process.env.NODE_ENV === 'development') {
    routes['/tests'] = { component: Tests };
}

export default routes;
