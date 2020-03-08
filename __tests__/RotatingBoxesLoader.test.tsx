import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { RotatingBoxesLoader } from '../lib/index';

configure({ adapter: new Adapter() });


describe('RotatingBoxesLoader', () => {
    describe('default', () => {
        const wrapper = mount(<RotatingBoxesLoader loading={true} />);
        const props = wrapper.props();

        it('should match snapshot', () => {
            expect(wrapper.find(RotatingBoxesLoader)).toMatchSnapshot();
        })

        it('should render with default loading true', () => {
            expect(props.loading).toEqual(true);
        })
    });
});

