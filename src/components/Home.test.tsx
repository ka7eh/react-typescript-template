import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders home header', () => {
    const { getByText } = render(<Home />);
    const linkElement = getByText(/Hello World/i);
    expect(linkElement).toBeInTheDocument();
});
