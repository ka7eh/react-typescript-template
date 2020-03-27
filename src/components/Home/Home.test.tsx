import React from 'react';

import { renderWithRedux } from '../../tests/utils/redux';

import Home from '.';

test('renders home header', () => {
    const { getByText } = renderWithRedux({ children: <Home /> });
    const linkElement = getByText(/Hello World/i);
    expect(linkElement).toBeInTheDocument();
});
