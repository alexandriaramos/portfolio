import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('App', () => {
    test('should render page title', () => {
        const wrapper = shallow(<App />);
        const title = wrapper.find('h1');
        expect(title).toHaveLength(1);
        expect(title.props().children).toBe('Alexandria | Portfolio');
    });
});