import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import initStoryshots from '@storybook/addon-storyshots';
import { expect } from 'chai';
import ReactLogo from './react';


// initStoryshots();
configure({ adapter: new Adapter() });

test('renders ', () => {
    const click = jest.fn();
    const result = shallow(<ReactLogo width={200} onClick={click} />);
    expect(result.props().style.width).equal(200);
    result.simulate('click');
    expect(result.props().spinning).equal(true);
    result.simulate('click');
    expect(result.props().spinning).equal(false);
});
