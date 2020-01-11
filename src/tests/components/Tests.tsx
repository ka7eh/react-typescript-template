// @flow
import React from 'react';

import BaseTests from './BaseTests';

type TestRoute = import('./types').TestRoute;

const routes: Array<TestRoute> = [];

const Tests = () => <BaseTests routes={routes} />;

export default Tests;
