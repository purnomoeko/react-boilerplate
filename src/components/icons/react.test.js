import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect as chaiExpect } from 'chai';
import 'jest-styled-components';
import ReactLogo from './react';


// initStoryshots();
configure({ adapter: new Adapter() });

test('renders ', () => {
    const click = jest.fn();
    const result = shallow(<ReactLogo width={200} onClick={click} />);
    chaiExpect(result.props().style.width).equal(200);
    result.simulate('click');
    chaiExpect(result.props().spinning).equal(true);
    result.simulate('click');
    chaiExpect(result.props().spinning).equal(false);
    expect(result).toHaveStyleRule('animation-play-state', 'paused');
    result.simulate('click');
    expect(result).toHaveStyleRule('animation-play-state', 'running');
});
